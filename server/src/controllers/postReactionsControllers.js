const PostReactionService = require("../services/PostReactionsServicer");
exports.getPostReactions = (req, res) => {};

exports.createPostReactions = async (req, res) => {
  if (!req.body) {
    return res.status(400).json("missing parameter required");
  }
  let result = await PostReactionService.CreatePostReaction(req.body);
  res.status(200).json(result);
};
