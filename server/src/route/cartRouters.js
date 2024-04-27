const express = require("express");
const router = express.Router();
const cartControllers = require("../controllers/cartControllers");

router.post("/carts", cartControllers.createCart);
router.get("/carts", cartControllers.getCarts);
router.delete("/carts", cartControllers.deleteCarts);

module.exports = router;
