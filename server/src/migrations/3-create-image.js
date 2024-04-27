"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Images", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            filename: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            productId: {
                type: Sequelize.INTEGER,
                // references: {
                //     model: "products",
                //     key: "id",
                // },
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
        await queryInterface.dropTable("Images");
    },
};
