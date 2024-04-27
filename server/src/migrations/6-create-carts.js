"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Carts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
                // references: {
                //     model: "users",
                //     key: "id",
                // },
            },
            product_id: {
                type: Sequelize.INTEGER,
                // references: {
                //   model: "products",
                //   key: "id",
                // },
            },
            status: {
                type: Sequelize.STRING,
                defaultValue: "pending",
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
        await queryInterface.dropTable("Carts");
    },
};
