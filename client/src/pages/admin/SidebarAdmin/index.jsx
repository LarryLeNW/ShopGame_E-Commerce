import { useNavigate, generatePath } from "react-router-dom";
import * as S from "./style";
import { ROUTES } from "../../../constants/routes";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { getCategoriesRequest } from "../../../redux/slicers/category.slice";
import { useDispatch, useSelector } from "react-redux";

function SidebarAdmin({ isShowSidebar, toggle }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isShowMenuProduct, setShowMenuProduct] = useState(false);
    const [isShowMenuUser, setShowMenuUser] = useState(false);
    const [isShowMenuAccount, setShowMenuAccount] = useState(false);

    const { data, loading } = useSelector((state) => state.category);
    useEffect(() => {
        dispatch(getCategoriesRequest());
    }, []);

    return (
        <S.WrapperSidebar active={isShowSidebar}>
            <S.ItemNav
                onClick={() => {
                    navigate(ROUTES.ADMIN.DASHBOARD);
                    toggle();
                }}
            >
                Tổng Quan
            </S.ItemNav>
            <S.ItemNav
                onClick={() => {
                    navigate(ROUTES.CONTACT);
                    toggle();
                }}
            >
                Trò chuyện với khách hàng
            </S.ItemNav>
            <S.ItemNav
                onClick={() => {
                    navigate(ROUTES.ADMIN.POST_MANAGEMENT);
                    toggle();
                }}
            >
                Quản lí tin tức
            </S.ItemNav>
            <S.ItemNav
                onClick={() =>
                    notification.info({
                        message: "Tính năng này chưa hoàn thiện ",
                    })
                }
            >
                Quản lí sản phẩm
            </S.ItemNav>
            <S.MenuChild isShowMenuProduct={isShowMenuProduct}>
                {data.map((item) => (
                    <S.ItemNav
                        key={item.id}
                        onClick={() => {
                            navigate(
                                generatePath(ROUTES.ADMIN.PRODUCT_MANAGEMENT, {
                                    category: item.name,
                                })
                            );
                            setShowMenuAccount(false);
                            toggle();
                        }}
                        bg={"green"}
                    >
                        Account {item.name}
                    </S.ItemNav>
                ))}
            </S.MenuChild>
            <S.ItemNav
                onClick={() =>
                    notification.info({
                        message: "Tính năng này chưa hoàn thiện ",
                    })
                }
            >
                Quản lí đơn hàng
            </S.ItemNav>
            <S.ItemNav
                onClick={() =>
                    notification.info({
                        message: "Tính năng này chưa hoàn thiện ",
                    })
                }
            >
                Báo cáo doanh thu
            </S.ItemNav>
            <S.ItemNav
                onClick={() =>
                    notification.info({
                        message: "Tính năng này chưa hoàn thiện ",
                    })
                }
            >
                Quản lí người dùng
            </S.ItemNav>
            <S.ItemNav
                onClick={() => {
                    notification.error({
                        message: "Chưa hoàn thiện !!!",
                        duration: 2,
                    });
                }}
            >
                Cài đặt hệ thống
            </S.ItemNav>
        </S.WrapperSidebar>
    );
}

export default SidebarAdmin;
