"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            price: {
                type: Sequelize.DOUBLE,
            },
            discount: {
                type: Sequelize.DOUBLE,
            },
            description: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            category: {
                type: Sequelize.STRING,
                references: {
                    model: "Categories",
                    key: "name",
                },
            },
            status: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            TKaccount: {
                type: Sequelize.STRING,
                defaultValue: "larryle123",
            },
            MKaccount: {
                type: Sequelize.STRING,
                defaultValue: "123456789",
            },
            owner: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
                defaultValue: "ADMIN",
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
        await queryInterface.dropTable("Products");
    },
};
