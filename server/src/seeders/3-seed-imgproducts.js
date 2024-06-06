"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create data to test in process dev...
    const ImagesData = [
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=9adedbbd-cbf3-4e09-b1df-f5f67dd38ddf",
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=61c9b26f-227f-437f-b5e4-9b5ec276242c",
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=94384565-dcc6-4338-9fb4-c967a2198ff2",
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flmht_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A20%3A10?alt=media&token=4407650b-80ca-4aed-b2b2-a0fd43ccfdae",
        productId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // images lq productList
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh1.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=1dc7179c-8093-49bf-8d34-daebfdc74e17",
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh2.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=21cbdc92-dbd8-4d06-b908-5de8e064ebe4",
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh3.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=799d0a52-4932-4feb-bc9f-a2bcc57bf80a",
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        filename:
          "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Flq_anh4.jpg%20%20%20%20%20%20%202023-12-26%2023%3A24%3A9?alt=media&token=d8f18421-260e-40e4-8399-830253761a91",
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Images", ImagesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Xóa tất cả dữ liệu trong bảng User
    await queryInterface.bulkDelete("Images", null, {});
  },
};
