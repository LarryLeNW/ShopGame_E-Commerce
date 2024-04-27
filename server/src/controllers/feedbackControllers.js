const FeedbackService = require("../services/FeedbackService");

exports.createFeedback = async (req, res) => {
  if (!req.body.productId) {
    return res.status(200).json("missing parameter id");
  }
  let data = await FeedbackService.createFeedback(req.body);
  return res.status(200).json(data);
};

exports.getFeedback = async (req, res) => {
  if (!req.query.id) {
    return res.status(200).json("missing parameter id");
  }
  let data = await FeedbackService.getFeedback(req.query.id);
  return res.status(200).json(data);
};
