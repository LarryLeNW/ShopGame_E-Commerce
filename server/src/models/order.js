"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.belongsTo(models.Product, {
                as: "DetailProduct",
                foreignKey: "ProductID",
            });
        }
    }
    Order.init(
        {
            UserID: DataTypes.STRING,
            ProductID: DataTypes.INTEGER,
            Cost: DataTypes.INTEGER,
            Currency: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
