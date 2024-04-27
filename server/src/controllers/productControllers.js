const ProductService = require("../services/Productservice");

exports.getProduct = async (req, res) => {
  try {
    let data = await ProductService.getProduct(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json("false");
  }
};

exports.createProduct = async (req, res) => {
  try {
    if (req.fileValidationError) {
      return res
        .status(200)
        .json({ errCode: 99, message: req.fileValidationError });
    }
    if (!req.files || !req.files.length) {
      return res
        .status(200)
        .json({ errCode: 1, message: "No images uploaded." });
    }

    if (!req.body.name) {
      return res
        .status(200)
        .json({ errCode: 2, message: "Missing required 'name' parameter." });
    }

    const images = req.files.map((file) => file.filename);

    const result = await ProductService.createProduct(req.body, images);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errCode: 3, message: "Internal server error." });
  }
};

exports.updateProduct = async (req, res) => {
  if (req.fileValidationError) {
    return res
      .status(200)
      .json({ errCode: 99, message: req.fileValidationError });
  }
  const images = req.files.map((file) => file.filename);
  let message = await ProductService.serviceEditProduct(req.body, images);
  return res.status(200).json(message);
};

exports.deleteProduct = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter",
    });
  }
  let message = await ProductService.serviceDelete(req.query.id);
  return res.status(200).json(message);
};
