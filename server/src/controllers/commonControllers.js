const db = require("../models");

exports.getTotal = async (req, res) => {
    let users = await db.User.count();
    let products = await db.Product.count();
    let orders = await db.Order.count();
    let revenue = await db.Order.sum("cost");

    const monthlyOrderCounts = await db.Order.findAll({
        attributes: [
            [db.sequelize.fn("MONTH", db.sequelize.col("createdAt")), "month"],
            [db.sequelize.fn("COUNT", db.sequelize.col("id")), "orderCount"],
        ],
        group: [db.sequelize.fn("MONTH", db.sequelize.col("createdAt"))],
    });

    return res.status(200).json({
        users,
        products,
        orders,
        revenue,
        monthlyOrderCounts,
    });
};
