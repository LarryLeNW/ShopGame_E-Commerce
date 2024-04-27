import { useDispatch } from "react-redux";

import * as S from "./style";
import { logoutRequest } from "src/redux/slicers/auth.slice";
import { ROUTES } from "src/constants/routes";
import { useNavigate } from "react-router-dom";
import {
    AndroidOutlined,
    LogoutOutlined,
    MenuOutlined,
} from "@ant-design/icons";

function HeaderAdmin({ openMenu }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <S.WrapperHeader>
            <S.IconSideBarAdmin onClick={() => openMenu()}>
                <MenuOutlined />
            </S.IconSideBarAdmin>
            <S.TitleAdmin>
                Admin <AndroidOutlined />
            </S.TitleAdmin>
            <S.IconLogoutAdmin
                onClick={() => {
                    dispatch(
                        logoutRequest({
                            callback: () => {
                                navigate(ROUTES.LOGIN);
                            },
                        })
                    );
                }}
            >
                <LogoutOutlined />
            </S.IconLogoutAdmin>
        </S.WrapperHeader>
    );
}

export default HeaderAdmin;
