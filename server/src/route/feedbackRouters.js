const express = require("express");
const router = express.Router();
const feedbackControllers = require("../controllers/feedbackControllers");

router.post("/feedbacks", feedbackControllers.createFeedback);
router.get("/feedbacks", feedbackControllers.getFeedback);

module.exports = router;
