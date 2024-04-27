const express = require("express");
const router = express.Router();
const postCommentController = require("../controllers/postComment");

router.post("/commentPosts", postCommentController.createComment);
// router.get("/commentPosts", postCommentController.getPost);

module.exports = router;
