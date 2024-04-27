const express = require("express");
const router = express.Router();
const postReactionsControllers = require("../controllers/postReactionsControllers");

router.get("/postReactions", postReactionsControllers.getPostReactions);
router.post("/postReactions", postReactionsControllers.createPostReactions);

module.exports = router;
