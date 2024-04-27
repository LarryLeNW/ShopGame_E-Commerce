const db = require("../models");

const checkPostExits = async (id) => {
  try {
    let result = await db.Post.findOne({
      where: { id },
    });
    console.log(result);
    return !!result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

let createComment = async (data) => {
  try {
    let check = await checkPostExits(data.postId);
    if (!check) {
      return "Not found this post";
    }
    let [postComment, created] = await db.PostComment.findOrCreate({
      where: { postId: data.postId, userId: data.userId },
      defaults: {
        postId: data.postId,
        userId: data.userId,
        content: data.content,
        adminCheck: data.adminCheck,
      },
    });

    if (!created) {
      await postComment.update({
        content: data.content,
        adminCheck: data.adminCheck,
      });
    }

    return postComment;
  } catch (error) {
    console.log(error);
    return "Something went wrong !!!";
  }
};

module.exports = {
  createComment,
};
