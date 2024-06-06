"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  // create data to test in process dev...
  up: async (queryInterface, Sequelize) => {
    const CategoriesData = [
      {
        id: 1,
        name: "Liên Minh Huyền Thoại",
        description: "Acc Liên Minh Giá Trắng Thông Tin.",
        img: "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2FbgLMHT.jpg%20%20%20%20%20%20%202023-12-26%204%3A30%3A21?alt=media&token=300925d6-0907-4597-9c78-999c84445b80",
      },
      {
        id: 2,
        name: "Liên Quân Mobile",
        description: "Acc Liên Quân Giá rẻ , Bảo Hành Trọn Đời.",
        img: "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2FbgLQ.jpg%20%20%20%20%20%20%202023-12-26%204%3A38%3A4?alt=media&token=e531adc3-0434-4393-9b5d-17e86452989a",
      },
      {
        id: 3,
        name: "Ngọc Rồng Online",
        description: "Acc Ngọc Rồng Giá Rẻ , Full Thông Tin ",
        img: "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2FbgNRO.jpg%20%20%20%20%20%20%202023-12-26%204%3A38%3A51?alt=media&token=5f61d083-85b7-4c45-927c-f43fe15bc2ba",
      },
    ];

    try {
      await queryInterface.bulkInsert("Categories", CategoriesData, {});
    } catch (error) {
      console.error("Error during bulk insert:", error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa tất cả dữ liệu trong bảng User
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
