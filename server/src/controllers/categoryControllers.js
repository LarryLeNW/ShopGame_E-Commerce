const CategoryService = require("../services/CategoryService");

exports.createCategory = async (req, res) => {
  let result;
  if (!req.body.name) {
    result = {
      errCode: 2,
      message: "Missing required name parameter",
    };
  } else {
    result = await CategoryService.createCategory(req.body);
  }
  res.status(200).json(result);
};

exports.getCategory = async (req, res) => {
  let data = await CategoryService.getCategory();
  if (data === null) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "No Category found",
      data: [],
    });
  }
  return res.status(200).json(data);
};
