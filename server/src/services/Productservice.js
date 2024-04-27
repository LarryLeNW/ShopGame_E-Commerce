const { query } = require("express");
const db = require("../models/index");
const fs = require("fs");
const path = require("path");
const { Op } = require("sequelize");

// check product đã tồn tại hãy chưa qua name client truyền vào
let checkExits = async (name, category) => {
    try {
        let product = await db.Product.findOne({
            where: { name, category },
        });
        return !!product;
    } catch (error) {
        console.log(error);
    }
};

const createProduct = async (data, imagePaths) => {
    try {
        const { name, price, discount, description, category } = data;
        const check = await checkExits(name, category);
        if (check) {
            return {
                errCode: 2,
                message: "Product is exists",
            };
        }
        const product = await db.Product.create({
            name,
            price,
            discount,
            description,
            category,
            img: imagePaths[0],
        });

        const images = imagePaths.map((imagePath) => {
            return { filename: imagePath, productId: product.id };
        });
        await db.Image.bulkCreate(images);

        return {
            errCode: 0,
            message: "Product created successfully.",
            product,
            images,
        };
    } catch (error) {
        console.error(error);
        return {
            errCode: 2,
            message: "Failed to create product.",
        };
    }
};

let getProduct = async ({
    page,
    limit,
    order,
    name,
    price,
    id,
    status,
    ...query
}) => {
    try {
        let res = {};
        if (id) {
            res.products = await db.Product.findOne({
                where: {
                    id,
                },
                attributes: {
                    exclude: ["TKaccount", "MKaccount"],
                },
            });
            res.images = await db.Image.findAll({
                where: {
                    productId: id,
                },
            });
            return res;
        }
        const queries = { raw: true, nest: true };
        const offset = !page || +page <= 1 ? 0 : +page - 1;
        const fLimit = +limit || 8;
        queries.offset = offset * fLimit;
        queries.limit = fLimit;
        if (order) queries.order = [order];
        if (name) query.name = { [Op.substring]: name };
        if (price) query.price = { [Op.between]: price };
        if (status) query.status = JSON.parse(status);
        res = await db.Product.findAndCountAll({
            where: query,
            ...queries,
            include: [
                {
                    model: db.Image,
                    as: "Images",
                    attributes: ["filename"],
                },
            ],
            attributes: {
                exclude: ["TKaccount", "MKaccount"],
            },
        });
        const totalCount = await db.Product.count({ where: query });
        res.totalPages = Math.ceil(totalCount / limit);
        if (res) return res;
    } catch (error) {
        console.log(error);
        return "Something went wrong";
    }
};

let serviceDelete = async (id) => {
    try {
        if (id === "All") {
            await db.Product.destroy({ where: {} });
            await db.Image.destroy({ where: {} });

            const imageDir = "Images";
            if (fs.existsSync(imageDir)) {
                const files = fs.readdirSync(imageDir);
                for (const file of files) {
                    const filePath = path.join(imageDir, file);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                }
            }

            return {
                errCode: 0,
                errMessage: "Deleted all products and images successfully",
            };
        }

        let product = await db.Product.findOne({
            where: {
                id: id,
            },
        });

        if (!product) {
            return {
                errCode: "2",
                errMessage: "User not found",
            };
        } else {
            let imagesOld = await db.Image.findAll({
                where: {
                    productId: product.id,
                },
            });

            imagesOld.forEach(async (item) => {
                const imagePath = `Images/${item.filename}`;
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                } else {
                    console.log("File not found:", imagePath);
                }
                await item.destroy();
            });

            await db.Product.destroy({
                where: { id: id },
            });

            await db.Feedback.destroy({
                where: { productId: id },
            });
            await db.Carts.destroy({
                where: { product_id: id },
            });
            return {
                errCode: 0,
                errMessage: "Deleted Successfully user name : " + product.name,
            };
        }
    } catch (error) {
        console.log(error);
    }
};

let serviceEditProduct = async (data, imageNew) => {
    try {
        if (!data.id) {
            return {
                errorCode: 1,
                errMessage: "Missing required parameter id",
            };
        }

        let product = await db.Product.findOne({
            where: { id: data.id },
        });

        if (product) {
            let imagesOld = await db.Image.destroy({
                where: {
                    productId: product.id,
                },
            });
            product.name = data.name;
            product.price = data.price;
            product.discount = data.discount;
            product.img = imageNew[0];
            product.description = data.description;
            await product.save();

            const rowImageNew = imageNew.map((imagePath) => {
                return { filename: imagePath, productId: product.id };
            });
            await db.Image.bulkCreate(rowImageNew);
            return {
                errorCode: 0,
                errMessage: "Ok",
                product,
            };
        } else {
            return {
                errorCode: 1,
                errMessage: "Not Found Product",
            };
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createProduct,
    getProduct,
    serviceDelete,
    serviceEditProduct,
};
