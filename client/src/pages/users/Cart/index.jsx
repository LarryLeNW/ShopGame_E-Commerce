import { useDispatch, useSelector } from "react-redux";
import {
    deleteCartRequest,
    getCartListRequest,
} from "../../../redux/slicers/cart.slice";
import { Button, Col, Row, Table, Card, notification } from "antd";
import { ROUTES } from "../../../constants/routes";

import * as S from "./styles";
import { generatePath, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CardPage() {
    const dispatch = useDispatch();
    let [isLoadingPay, setLoadingPay] = useState(false);
    const navigate = useNavigate();
    const { cartList } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);
    const totalPrice = cartList.reduce(
        (total, item) => total + item.priceProduct - item.discountProduct,
        0
    );

    useEffect(() => {
        dispatch(
            getCartListRequest({
                id: userInfo.data?.id,
            })
        );
    }, [userInfo.data]);

    const handleDeleteCartItem = (product_id, user_id) => {
        dispatch(deleteCartRequest({ product_id, user_id }));
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
            product: cartList,
            userinfo: userInfo.data,
        };
        axios
            .post("http://localhost:6789/pay", data)
            .then((res) => {
                setLoadingPay(false);
                window.open(res.data, "_blank");
            })
            .catch((err) => {
                setLoadingPay(false);
                console.log(err);
            });
    };

    const tableColumn = [
        {
            title: "Tên sản phẩm",
            dataIndex: "nameProduct",
            key: "nameProduct",
        },
        {
            title: "Đơn giá",
            dataIndex: "priceProduct",
            key: "priceProduct",
            render: (_, item) => {
                return `${item?.priceProduct?.toLocaleString()} VNĐ`;
            },
        },
        {
            title: "Giảm còn",
            dataIndex: "discountProduct",
            key: "discountProduct",
            render: (_, item) => {
                return `${(
                    item.priceProduct - item.discountProduct
                ).toLocaleString()} VNĐ`;
            },
        },
        {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            render: (_, item) => (
                <S.ContainerControl>
                    <S.Button
                        style={{
                            background: "red",
                        }}
                        onClick={() => {
                            handleDeleteCartItem(
                                item.product_id,
                                userInfo.data.id
                            );
                        }}
                    >
                        Xóa
                    </S.Button>
                    <S.Button
                        style={{
                            background: "aqua",
                            color: "black",
                        }}
                        onClick={() => {
                            navigate(
                                generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                                    category: item.categoryProduct,
                                    id: item.idProduct,
                                })
                            );
                        }}
                    >
                        Chi tiết
                    </S.Button>
                </S.ContainerControl>
            ),
        },
    ];

    return (
        <S.CartListWrapper>
            <S.Title
                level={2}
                style={{ marginBottom: 16, textAlign: "center" }}
            >
                Giỏ hàng
            </S.Title>
            <Card size="small">
                <Table
                    style={{ textAlign: "center" }}
                    columns={tableColumn}
                    dataSource={cartList}
                    rowKey="id"
                    pagination={false}
                />
            </Card>
        </S.CartListWrapper>
    );
}

export default CardPage;
