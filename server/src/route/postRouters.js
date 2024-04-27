const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers");

router.post("/posts", postControllers.createPost);
router.get("/posts", postControllers.getPost);
router.delete("/posts", postControllers.deletePost);
router.put("/posts", postControllers.editPost);

module.exports = router;
