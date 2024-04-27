const db = require("../models");

exports.createOrder = async (data) => {
    try {
        let order = db.Order.create(data);
        if (order) return order;
        else return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

exports.getOrder = async (userID) => {
    try {
        let orders = await db.Order.findAll({
            where: {
                userID,
            },
            include: [
                {
                    model: db.Product,
                    as: "DetailProduct",
                    attributes: ["name", "TKaccount", "MKaccount"],
                },
            ],
        });
        if (orders) return orders;
        else return [];
    } catch (error) {
        console.log(error);
        return [];
    }
};
