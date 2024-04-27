const db = require("../models");

let checkRoleAdmin = async (id) => {
  try {
    let user = await db.User.findOne({
      where: { id },
      raw: true,
    });
    return !!(!!user && user.roleId === "ADMIN");
  } catch (error) {
    console.log(error);
  }
};

let CreatePost = async (data) => {
  try {
    let isAdmin = await checkRoleAdmin(data.userId);
    if (isAdmin) {
      let result = await db.Post.create(data);
      return { error: 0, mess: "Create successfully", result };
    }
    return { error: 1, mess: "U are't Admin " };
  } catch (error) {
    return { error: 2, mess: "Something went wrong !!! " };
  }
};

let GetPost = async () => {
  try {
    let results = await db.Post.findAll({
      raw: true,
    });
    for (const result of results) {
      let infoPoster = await db.User.findOne({
        where: {
          id: result.userId,
        },
        attributes: ["name", "email", "avatar"],
        raw: true,
      });
      // return info poster
      result.infoPoster = infoPoster;
      // return reactions
      result.reactions = await db.PostReactions.findAll({
        where: { postId: result.id },
        raw: true,
      });

      // return type different status
      result.typeCategory = [
        ...new Set(result.reactions.map((item) => item.ReactionType)),
      ];

      // return comment
      let comments = await db.PostComment.findAll({
        where: { postId: result.id },
        raw: true,
      });
      // return info comment
      for (const comment of comments) {
        let infoComment = await db.User.findOne({
          where: {
            id: comment.userId,
          },
          attributes: ["name", "email", "avatar"],
          raw: true,
        });
        comment.infoComment = infoComment;
      }
      result.comments = comments;
    }
    return results;
  } catch (error) {
    console.log(error);
  }
};

let deletePost = async (id) => {
  try {
    let result = await db.Post.destroy({
      where: { id },
    });

    if (result) {
      return { error: 0, mess: "delete successfully" };
    }
    return { error: 2, mess: "post no exits !!!" };
  } catch (error) {
    return { error: 1, mess: error };
  }
};
let editPost = async (data) => {
  try {
    let { id, ...dataUpdate } = data;
    let result = await db.Post.update(dataUpdate, {
      where: {
        id,
      },
    });

    if (result) {
      return { error: 0, mess: "edit successfully" };
    }
    return { error: 2, mess: "post no exits !!!" };
  } catch (error) {
    return { error: 1, mess: error };
  }
};

module.exports = {
  CreatePost,
  GetPost,
  deletePost,
  editPost,
};
