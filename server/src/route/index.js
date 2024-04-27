const paypalRouter = require("../route/PaymentRouters");
const authRouter = require("../route/authRouters");
const productRouter = require("../route/productRouters");
const cartRouter = require("../route/cartRouters");
const feedbackRouter = require("../route/feedbackRouters");
const categoryRouter = require("../route/categoryRouters");
const userRouter = require("../route/userRouters");
const postRouter = require("../route/postRouters");
const postReactionsRouter = require("../route/postReactionRouter");
const postCommentRouter = require("../route/postCommentRouter");
const commonRouter = require("../route/commonRouters");
const orderRouter = require("../route/orderRouters");

let initWebRoutes = (app) => {
    app.use(paypalRouter);
    app.use(authRouter);
    app.use(productRouter);
    app.use(cartRouter);
    app.use(feedbackRouter);
    app.use(categoryRouter);
    app.use(userRouter);
    app.use(postRouter);
    app.use(postCommentRouter);
    app.use(postReactionsRouter);
    app.use(commonRouter);
    app.use(orderRouter);
};

module.exports = initWebRoutes;
