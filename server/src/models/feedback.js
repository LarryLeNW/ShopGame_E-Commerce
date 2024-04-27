"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feedback.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
        as: "feedbackProduct",
      });
      // define association here
    }
  }
  Feedback.init(
    {
      userId: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Feedback",
    }
  );
  return Feedback;
};
