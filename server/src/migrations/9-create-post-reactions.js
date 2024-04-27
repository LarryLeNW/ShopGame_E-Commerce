"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("PostReactions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            postId: {
                type: Sequelize.INTEGER,
                // references: {
                //     model: "Posts",
                //     key: "id",
                // },
            },
            userId: {
                type: Sequelize.STRING,
                // references: {
                //   model: "Users",
                //   key: "id",
                // },
            },
            ReactionType: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("PostReactions");
    },
};
