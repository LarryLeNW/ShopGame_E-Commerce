const express = require("express");
const router = express.Router();
const commonControllers = require("../controllers/commonControllers");

router.get("/common", commonControllers.getTotal);

module.exports = router;
