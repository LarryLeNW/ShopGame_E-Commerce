let postCommentService = require("../services/PostComment");

exports.createComment = async (req, res) => {
  if (!req.body) {
    return res.status(400).json("Missing parameter required ");
  }
  let result = await postCommentService.createComment(req.body);
  return res.status(200).json(result);
};
