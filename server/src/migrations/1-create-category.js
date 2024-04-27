"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        primaryKey: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
      description: {
        type: Sequelize.STRING,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
      img: {
        type: Sequelize.STRING,
        charset: "utf8",
        collate: "utf8_general_ci",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Categories");
  },
};
