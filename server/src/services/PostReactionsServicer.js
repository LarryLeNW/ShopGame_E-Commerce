const db = require("../models");

const checkPostExits = async (id) => {
  try {
    let result = db.Post.findOne({
      where: { id },
    });
    return !!result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const CreatePostReaction = async (data) => {
  try {
    let check = await checkPostExits(data.postId);
    if (!check) {
      return "Not found this post";
    }
    let [postReaction, created] = await db.PostReactions.findOrCreate({
      where: { postId: data.postId, userId: data.userId },
      defaults: {
        postId: data.postId,
        userId: data.userId,
        ReactionType: data.ReactionType,
      },
    });

    if (!created) {
      await postReaction.update({ ReactionType: data.ReactionType });
    }

    return postReaction;
  } catch (error) {
    console.log(error);
    return "Something went wrong !!!";
  }
};

const EditPostReaction = () => {};
module.exports = {
  CreatePostReaction,
  EditPostReaction,
};
