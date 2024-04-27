const db = require("../models");

const checkProductExit = async (id) => {
  try {
    let product = await db.Product.findOne({
      where: { id },
    });
    return !!product;
  } catch (error) {
    console.log(error);
  }
};
const checkUserExit = async (id) => {
  try {
    let user = await db.User.findOne({
      where: { id },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createFeedback = async (data) => {
  try {
    const { userId, rate, comment, productId } = data;
    let checkProduct = await checkProductExit(productId);
    let checkUser = await checkUserExit(userId);
    if (checkProduct && !!checkUser) {
      let feedback = await db.Feedback.create({
        userId,
        rate,
        comment,
        productId,
      });
      return {
        mess: "Create feedback successfully !!!",
        feedback,
      };
    } else return "Something went wrong , plz check again .";
  } catch (error) {
    console.log(error);
  }
};

const getFeedback = async (productId) => {
  try {
    const check = await checkProductExit(productId);
    if (check) {
      const result = await db.Feedback.findAll({
        where: {
          productId,
        },
        raw: true,
      });

      if (result) {
        for (const feedback of result) {
          const infoUser = await db.User.findOne({
            where: {
              id: feedback.userId,
            },
            attributes: ["name", "email", "avatar"],
            raw: true,
          });
          feedback.userInfo = infoUser;
        }
        console.log(result);
        return result;
      } else {
        return [];
      }
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = {
  createFeedback,
  getFeedback,
};
