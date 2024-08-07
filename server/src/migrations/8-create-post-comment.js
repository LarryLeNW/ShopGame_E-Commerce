"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("PostComments", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            postId: {
                type: Sequelize.INTEGER,
                // references: {
                //   model: "posts",
                //   key: "id",
                // },
            },
            userId: {
                type: Sequelize.STRING,
                // references: {
                //   model: "users",
                //   key: "id",
                // },
            },
            content: {
                type: Sequelize.STRING,
            },
            adminCheck: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
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
        await queryInterface.dropTable("PostComments");
    },
};
