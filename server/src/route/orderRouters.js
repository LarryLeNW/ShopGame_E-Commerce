const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderControllers");

router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getOrder);

module.exports = router;
