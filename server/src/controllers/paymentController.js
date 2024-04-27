const paypal = require("paypal-rest-sdk");
const OrderService = require("../services/OrderService");

const { PAYPAL_MODE, PAYPAL_CLIENT_KEY, PAYPAL_SECRET_KEY } = process.env;
let total = undefined;
let userInfo = null;
let product = null;

paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
        "ASLp2KGIvuM5Syih74Dj7WiuRmRi7Jleko6DcmcsdMcKkRFoloX8aS7K1BKzaMCBFnuPTu7qtLIVafAZ",
    client_secret:
        "EHNti9iA140R1TUinJi912H-5PMJ8u4DSzq0zQbG-Sbj2KO1baSGAcPHPppDeV3g0_94HzkAfauueSZy",
});

const payProduct = async (req, res) => {
    userInfo = req.body.userinfo;
    product = req.body.product;
    if (!userInfo) {
        return res.status(401).json("missing info");
    }

    total = Math.round(product.price / 24000);

    try {
        const create_payment_json = {
            intent: "sale",
            payer: {
                payment_method: "paypal",
            },
            redirect_urls: {
                return_url: `${process.env.IP_SERVER}/success`,
                cancel_url: `${process.env.IP_SERVER}/cancel`,
            },
            transactions: [
                {
                    item_list: {
                        items: [
                            {
                                name: `${product.name}`,
                                sku: `${product.id}`,
                                price: `${total}`,
                                currency: "USD",
                                quantity: "1",
                            },
                        ],
                    },
                    amount: {
                        currency: "USD",
                        total: `${total}`,
                    },
                    description: `wellcome to my payment`,
                },
            ],
        };
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === "approval_url") {
                        res.send(payment.links[i].href);
                    }
                }
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};

const successPage = async (req, res) => {
    try {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        const execute_payment_json = {
            payer_id: payerId,
            transactions: [
                {
                    amount: {
                        currency: "USD",
                        total: `${total}`,
                    },
                },
            ],
        };
        paypal.payment.execute(
            paymentId,
            execute_payment_json,
            async function (error, payment) {
                if (error) {
                    console.log(error.response);
                    throw error;
                } else {
                    try {
                        await OrderService.createOrder({
                            UserID: userInfo.id,
                            ProductID: product.id,
                            Cost: total,
                            Currency: "USD",
                        });
                        return res.redirect(
                            `${process.env.IP_CLIENT}/profile/order-history`
                        );
                    } catch (error) {
                        return res.redirect(`${process.env.IP_CLIENT}`);
                    }
                }
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};

const cancelPage = async (req, res) => {
    console.log("vào page cancel");
    try {
        res.redirect("http://localhost:3000");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    payProduct,
    successPage,
    cancelPage,
};
