const db = require("../models");

const checkCartExists = async (product_id, user_id) => {
  let result = await db.Carts.findOne({
    where: {
      product_id,
      user_id,
    },
  });
  return !!result;
};

const checkUserExists = async (id) => {
  let result = await db.User.findOne({
    where: {
      id,
    },
  });
  return result;
};

const createCartService = async (data) => {
  try {
    let user = await checkUserExists(data.user_id);
    let cartExists = await checkCartExists(data.product_id, data.user_id);
    if (cartExists) return null;
    if (!!user) {
      const result = await db.Carts.create({
        ...data,
        status: "pending",
      });
      return result;
    } else {
      return "not found User";
    }
  } catch (error) {
    console.log(error);
  }
};

const getCartService = async (id) => {
  try {
    let Carts = await db.Carts.findAll({
      where: {
        user_id: id,
      },
      raw: true,
    });
    for (const cart of Carts) {
      let detail = await db.Product.findOne({
        where: {
          id: cart.product_id,
        },
      });

      if (detail) {
        cart.nameProduct = detail.name;
        cart.priceProduct = detail.price;
        cart.discountProduct = detail.discount;
        cart.categoryProduct = detail.category;
        cart.idProduct = detail.id;
      } else {
        cart.nameProduct = "Unknown Product";
      }
    }

    return Carts;
  } catch (error) {
    console.log(error);
  }
};

const deleteCart = async (user_id, product_id) => {
  try {
    let cart = await db.Carts.findOne({
      where: {
        user_id,
        product_id,
      },
    });

    if (!!cart) {
      await cart.destroy();
      let result = await db.Carts.findAll({
        where: {
          user_id,
        },
        raw: true,
      });

      for (const cart of result) {
        let detail = await db.Product.findOne({
          where: {
            id: cart.product_id,
          },
        });

        if (detail) {
          cart.nameProduct = detail.name;
          cart.priceProduct = detail.price;
          cart.discountProduct = detail.discount;
        } else {
          cart.nameProduct = "Unknown Product";
        }
      }

      return result;
    } else {
      return "Cart not found";
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCartService,
  getCartService,
  deleteCart,
};
