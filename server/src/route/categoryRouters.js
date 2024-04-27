const express = require("express");
const router = express.Router();
const categoryControllers = require("../controllers/categoryControllers");

router.get("/getcategory", categoryControllers.getCategory);
router.post("/createCategory", categoryControllers.createCategory);

module.exports = router;
