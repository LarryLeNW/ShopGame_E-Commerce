import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailRequest } from "../../../redux/slicers/product.slice";
import * as S from "./styles";
import { Button, Input, Rate, Space, Form, notification } from "antd";
import {
    createReviewRequest,
    getReviewListRequest,
} from "../../../redux/slicers/review.slice";
import dayjs from "dayjs";
import { addToCartRequest } from "../../../redux/slicers/cart.slice";
import Loading from "../../../components/Loading/Loading";
import ImageSlider from "../../../components/SliderImage";
import axios from "axios";

function ProductDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [reviewForm] = Form.useForm();
    const { productDetail } = useSelector((state) => state.product);
    const { reviewList } = useSelector((state) => state.review);
    const { userInfo } = useSelector((state) => state.auth);
    let [isLoadingPay, setLoadingPay] = useState(false);

    useEffect(() => {
        dispatch(getProductDetailRequest({ id: parseInt(id) }));
        dispatch(getReviewListRequest({ id: parseInt(id) }));
    }, [id]);

    const handleReviewProduct = (values) => {
        dispatch(
            createReviewRequest({
                data: {
                    ...values,
                    userId: userInfo?.data?.id,
                    productId: id,
                },
                callback: () => {
                    reviewForm.resetFields();
                },
            })
        );
    };

    const handlePayment = () => {
        if (!userInfo.data) {
            notification.warning({
                message: "Vui lòng đăng nhập để mua",
                duration: 2,
            });
            return;
        }
        setLoadingPay(true);
        const data = {
            product: productDetail?.data?.products,
            total: Math.ceil(productDetail?.data?.products.price / 24000),
            userinfo: userInfo.data,
        };
        axios
            .post("http://localhost:6789/pay", data)
            .then((res) => {
                setLoadingPay(false);
                window.open(res.data, "_self");
            })
            .catch((err) => {
                setLoadingPay(false);
                console.log(err);
            });
    };

    const handleAddToCart = () => {
        if (!userInfo.data) {
            notification.warning({
                message: "Vui lòng đăng nhập !!!",
                duration: 1,
            });
            return;
        }
        dispatch(
            addToCartRequest({
                data: {
                    user_id: userInfo.data?.id,
                    product_id: id,
                },
            })
        );
    };

    const renderReviewList = useMemo(() => {
        if (reviewList.data.length < 1) {
            return "Chưa có feed back nào . ";
        }
        return reviewList.data.map((item) => {
            return (
                <S.ItemReview key={item.id}>
                    <Space>
                        <S.AvatarReview>
                            <img src={item?.userInfo?.avatar} alt="img " />
                        </S.AvatarReview>
                        <S.NameReview>
                            {item.userInfo.email === userInfo.data?.email ? (
                                <span style={{ color: "red" }}>You</span>
                            ) : (
                                item.userInfo.name
                            )}
                        </S.NameReview>
                        <S.TimeReview size="sm">
                            {dayjs(item.createdAt).fromNow()}
                        </S.TimeReview>
                    </Space>
                    <Rate
                        value={item.rate}
                        disabled
                        style={{ display: "block", fontSize: 12 }}
                    />
                    <p>{item.comment}</p>
                </S.ItemReview>
            );
        });
    }, [reviewList.data]);

    const renderReviewForm = useMemo(() => {
        if (userInfo?.data?.id) {
            const isReviewed = reviewList.data.some(
                (item) => item.email === userInfo.data.email
            );
            if (isReviewed) {
                return (
                    <div style={{ textShadow: "0 0 10px red" }}>
                        Bạn đã đánh giá sản phẩm này
                    </div>
                );
            }
            return (
                <div>
                    <Form
                        form={reviewForm}
                        name="loginForm"
                        layout="vertical"
                        initialValues={{
                            rate: 0,
                            comment: "",
                        }}
                        onFinish={(values) => handleReviewProduct(values)}
                    >
                        <Form.Item
                            label="Đánh giá sao"
                            name="rate"
                            rules={[
                                {
                                    required: true,
                                    message: "Đánh giá sao là bắt buộc",
                                },
                            ]}
                        >
                            <Rate />
                        </Form.Item>

                        <Form.Item
                            label="Nhận xét"
                            name="comment"
                            rules={[
                                {
                                    required: true,
                                    message: "Nhận xét là bắt buộc",
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Gửi
                        </Button>
                    </Form>
                </div>
            );
        }
        return <div>Bạn chưa đăng nhập</div>;
    }, [userInfo.data, reviewList.data]);

    return (
        <div style={{ textAlign: "center" }}>
            {productDetail.loading ? (
                <Loading />
            ) : (
                <S.WrapperProduct>
                    <S.ContainerProduct>
                        <S.ContainerImgProduct>
                            {!!productDetail?.data?.images && (
                                <ImageSlider
                                    slides={productDetail?.data?.images}
                                />
                            )}
                        </S.ContainerImgProduct>
                        <S.WrapperProductInfo>
                            <Button
                                style={{
                                    position: "absolute",
                                    right: "20px",
                                    top: "20px",
                                }}
                                onClick={() => {
                                    handleAddToCart();
                                }}
                            >
                                🛒
                            </Button>
                            <S.TitleDetail>
                                <div>
                                    Name : {productDetail?.data?.products?.name}
                                </div>
                            </S.TitleDetail>
                            <S.DescriptionDetail>
                                {productDetail?.data?.products?.description}
                            </S.DescriptionDetail>
                            <S.PriceDetail>
                                Giá :{" "}
                                {productDetail?.data?.products?.price.toLocaleString()}{" "}
                                VNĐ
                                {productDetail?.data?.products?.discount >
                                    0 && (
                                    <div>
                                        Đã giảm :{" "}
                                        {productDetail?.data?.products?.discount.toLocaleString()}{" "}
                                        VNĐ
                                    </div>
                                )}
                            </S.PriceDetail>
                            <Button
                                type="primary"
                                style={{ width: "100%" }}
                                onClick={handlePayment}
                                loading={isLoadingPay}
                            >
                                Mua ngay 🏧
                            </Button>
                        </S.WrapperProductInfo>
                    </S.ContainerProduct>

                    <S.WrapperReview style={{ marginTop: "50px" }}>
                        <S.TitleReview>Review</S.TitleReview>
                        {renderReviewForm}
                        <div style={{ maxHeight: "500px", overflow: "scroll" }}>
                            {renderReviewList}
                        </div>
                    </S.WrapperReview>
                </S.WrapperProduct>
            )}
        </div>
    );
}

export default ProductDetail;
