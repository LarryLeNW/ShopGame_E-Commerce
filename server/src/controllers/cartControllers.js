const serviceCart = require("../services/CartService");

exports.createCart = async (req, res) => {
  let result = await serviceCart.createCartService({
    user_id: req.body.user_id,
    product_id: +req.body.product_id,
  });
  if (result === null) {
    return res.status(404).json("Sản phẩm đã tồn tại");
  }
  return res.status(200).json(result);
};

exports.getCarts = async (req, res) => {
  let result = await serviceCart.getCartService(req.query.id);
  return res.status(200).json(result);
};

exports.deleteCarts = async (req, res) => {
  let { product_id, user_id } = req.body;
  if (!product_id || !user_id) return res.status(404).json("miss parameter !!");
  let result = await serviceCart.deleteCart(user_id, product_id);
  return res.status(200).json(result);
};
