"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create data to test in process dev...
    const usersData = [
      {
        id: "idadmin",
        name: "admin",
        email: "admin@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-admin-100.png?alt=media&token=f31b1775-2ebd-47b6-9ae5-b499f8d7e477",
        birthday: 946684800000,
        tokenLogin: null,
        roleId: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user1",
        email: "user1@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        tokenLogin: null,
        roleId: "USER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user2",
        email: "user2@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        tokenLogin: null,
        roleId: "USER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user3",
        email: "user3@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        roleId: "USER",
        tokenLogin: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user3",
        email: "user3@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        roleId: "USER",
        tokenLogin: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user4",
        email: "user4@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        roleId: "USER",
        tokenLogin: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user4",
        email: "user4@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        roleId: "USER",
        tokenLogin: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user5",
        email: "user5@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        roleId: "USER",
        tokenLogin: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "user6",
        email: "user6@gmail.com",
        password:
          "$2a$10$5m8p57ZAP8Sgxv46CrOwPuACtbrXDs06KJ8I4mGm4KgpUBbZ0iRqK", // 123
        sdt: "1234567890",
        money: 100.0,
        address: "123 Main St",
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-user-100.png?alt=media&token=83128feb-e520-4a60-b707-e5f7bf33d5f6",
        birthday: 946684800000,
        roleId: "USER",
        tokenLogin: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các người dùng khác vào đây nếu cần
    ];

    try {
      // Thêm dữ liệu vào bảng User
      await queryInterface.bulkInsert("Users", usersData, {});
    } catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa tất cả dữ liệu trong bảng User
    await queryInterface.bulkDelete("Users", null, {});
  },
};
