const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/paymentController");

router.post("/pay", paymentController.payProduct);
router.get("/success", paymentController.successPage);
router.get("/cancel", paymentController.cancelPage);

module.exports = router;
