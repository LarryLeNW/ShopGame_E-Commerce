const OrderService = require("../services/OrderService");

exports.createOrder = async (req, res) => {
    return res.send(req.body);
};

exports.getOrder = async (req, res) => {
    const { userID } = req.query;
    if (!userID) return res.status(404).json("miss parameter");
    let orders = await OrderService.getOrder(userID);
    return res.status(200).json(orders);
};
