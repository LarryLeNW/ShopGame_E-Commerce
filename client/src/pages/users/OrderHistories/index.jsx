import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import * as S from "./style";

function OrderHistories() {
    const userInfo = useSelector((state) => state.auth.userInfo.data);
    const [orders, setOrders] = useState([]);
    console.log("🚀 ~ file: index.jsx:10 ~ OrderHistories ~ orders:", orders);
    useEffect(() => {
        fetchData();
    }, [userInfo]);

    const fetchData = async () => {
        if (userInfo?.id) {
            const params = {
                userID: userInfo?.id,
            };
            let result = await axios.get("http://localhost:6789/orders", {
                params,
            });
            setOrders(result.data);
        }
    };

    const tableColumn = [
        {
            title: "Tên sản phẩm",
            dataIndex: "DetailProduct",
            key: "DetailProduct",
            render: (_, item) => {
                return `${item?.DetailProduct?.name}`;
            },
        },
        {
            title: "Số tiền thanh toán ",
            dataIndex: "Cost",
            key: "Cost",
            render: (_, item) => {
                return `${item?.Cost?.toLocaleString()}`;
            },
        },
        {
            title: "Loại tiền",
            dataIndex: "Currency",
            key: "Currency",
            render: (_, item) => {
                return `${item?.Currency}`;
            },
        },
        {
            title: "Tài khoản",
            dataIndex: "DetailProduct",
            key: "DetailProduct",
            render: (_, item) => {
                return `${item?.DetailProduct?.TKaccount}`;
            },
        },
        {
            title: "Mật khẩu",
            dataIndex: "DetailProduct",
            key: "DetailProduct",
            render: (_, item) => {
                return `${item?.DetailProduct?.MKaccount}`;
            },
        },
        {
            title: "Ngày mua",
            dataIndex: "DetailProduct",
            key: "DetailProduct",
            render: (_, item) => {
                return `${dayjs(item?.createdAt).fromNow()}`;
            },
        },
    ];

    return (
        <S.Wrapper>
            <Table
                style={{ overflow: "scroll", background: "white" }}
                columns={tableColumn}
                dataSource={orders}
                rowKey="id"
                pagination={false}
            />
        </S.Wrapper>
    );
}

export default OrderHistories;
