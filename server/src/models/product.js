"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.hasMany(models.Feedback, {
                foreignKey: "id",
                as: "feedbackProduct",
            });
            Product.hasMany(models.Image, {
                foreignKey: "id",
                as: "Images",
            });
            Product.hasOne(models.Order, {
                foreignKey: "ProductID",
                as: "DetailProduct",
            });
            // define association here
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            price: DataTypes.DOUBLE,
            discount: DataTypes.DOUBLE,
            description: DataTypes.STRING,
            category: DataTypes.INTEGER,
            status: DataTypes.BOOLEAN,
            owner: DataTypes.STRING,
            TKaccount: DataTypes.STRING,
            MKaccount: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
