const db = require("../models/index");

// check Category đã tồn tại
let checkExits = async (name) => {
  try {
    let category = await db.Category.findOne({
      where: { category_name: name },
    });
    return !!category;
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (data) => {
  try {
    let check = await checkExits(data.name);
    if (check === true) {
      return {
        errCode: 1,
        message: "Your category is exits",
      };
    }
    await db.Category.create({
      category_name: data.name,
    });
    return {
      errCode: 0,
      message: "Ok",
    };
  } catch (error) {
    return {
      errCode: 2,
      message: "CREATE FAILED",
    };
  }
};

let getCategory = async () => {
  try {
    let data = null;
    data = await db.Category.findAll();
    return data;
  } catch (error) {
    console(error);
  }
};

module.exports = {
  createCategory,
  getCategory,
};
