'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostReactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostReactions.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.STRING,
    ReactionType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PostReactions',
  });
  return PostReactions;
};