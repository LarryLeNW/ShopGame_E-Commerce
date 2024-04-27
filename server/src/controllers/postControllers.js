let PostService = require("../services/PostService");

exports.createPost = async (req, res) => {
  if (!req.body) {
    return res.status(200).json("Missing required");
  }
  let result = await PostService.CreatePost(req.body);
  if (result.error == 0) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
};
exports.getPost = async (req, res) => {
  if (!req.body) {
    return res.status(200).json("Missing required");
  }
  let result = await PostService.GetPost(req.body);
  return res.status(200).json(result);
};

exports.deletePost = async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json("missing parameter id ");
  }
  let result = await PostService.deletePost(req.query.id);
  if (result.error == 0) {
    return res.status(200).json(result.mess);
  }
  return res.status(400).json(result.mess);
};

exports.editPost = async (req, res) => {
  let { id, title, content } = req.body;
  if (!id || !title || !content) {
    return res.status(400).json("missing parameter required");
  }
  let result = await PostService.editPost(req.body);
  if (result.error == 0) {
    return res.status(200).json(result.mess);
  } else {
    return res.status(400).json(result.mess);
  }
};
