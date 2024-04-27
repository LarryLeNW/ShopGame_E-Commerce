const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");

const multer = require("multer");
const allowedImageTypes = ["image/jpeg", "image/png"];

const fileFilter = (req, file, cb) => {
  if (allowedImageTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    req.fileValidationError = "Không nhận dạng ảnh này";
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage, fileFilter });

router.post(
  "/products",
  upload.array("images", 5),
  productControllers.createProduct
);
router.get("/products", productControllers.getProduct);
router.delete("/products", productControllers.deleteProduct);
router.put(
  "/products",
  upload.array("images", 5),
  productControllers.updateProduct
);

module.exports = router;
