import { Link, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import * as S from "./style";
import { Col } from "antd";

function ProfileLayout() {
    const { pathname } = useLocation();
    return (
        <S.WrapperProfileLayout>
            <S.MenubarProfile>
                <S.ItemMenu active={pathname === "/profile/user-info"}>
                    <Link to={ROUTES.USER.USER_INFO}>Tài khoản</Link>
                </S.ItemMenu>
                <S.ItemMenu active={pathname === "/profile/change-password"}>
                    <Link to={ROUTES.USER.CHANGE_PASSWORD}>
                        Thay đổi mật khẩu
                    </Link>
                </S.ItemMenu>
                <S.ItemMenu active={pathname === "/profile/order-history"}>
                    <Link to={ROUTES.USER.ORDER_HISTORY}>Lịch sử order</Link>
                </S.ItemMenu>
            </S.MenubarProfile>
            <div style={{ width: "100%" }}>
                <Col md={18}>
                    <Outlet></Outlet>
                </Col>
            </div>
        </S.WrapperProfileLayout>
    );
}

export default ProfileLayout;
