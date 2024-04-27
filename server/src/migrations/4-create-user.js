"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            name: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            description: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
                defaultValue: "",
            },
            email: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            password: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            sdt: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            money: {
                type: Sequelize.DOUBLE,
            },
            birthday: {
                type: Sequelize.BIGINT,
                defaultValue: 946684800000,
            },
            avatar: {
                type: Sequelize.STRING,
                defaultValue: "defaultAvatar.jpg",
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            roleId: {
                type: Sequelize.STRING,
                defaultValue: "USER",
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            address: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            typeLogin: {
                type: Sequelize.STRING,
                defaultValue: "default",
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            tokenLogin: {
                type: Sequelize.STRING,
                charset: "utf8",
                collate: "utf8_general_ci",
            },
            passwordResetToken: {
                type: Sequelize.STRING,
                defaultValue: undefined,
            },
            passwordResetExpires: {
                type: Sequelize.STRING,
                defaultValue: undefined,
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
        await queryInterface.dropTable("Users");
    },
};
