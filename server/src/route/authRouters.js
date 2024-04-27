const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/login", userControllers.login);
router.post("/getUserByToken", userControllers.getUserByToken);
router.post("/loginOthers", userControllers.loginOthers);
router.post("/register", userControllers.createUser);
router.post("/requirePassword", userControllers.requireForgotPassword);
router.post("/resetPassword", userControllers.resetPassword);

module.exports = router;
