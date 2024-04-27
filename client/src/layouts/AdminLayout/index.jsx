import { useEffect, useState } from "react";
import HeaderAdmin from "../AdminLayout/HeaderAdmin";
import SidebarAdmin from "src/pages/admin/SidebarAdmin";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "src/constants/routes";
import { useSelector } from "react-redux";
import * as S from "./style";
import { useClickOutside } from "src/hooks/useClickOutside";

function LayoutAdmin() {
    const [isShowSidebar, setIsShowSidebar] = useState(false);

    const toggleShowSidebar = () => {
        setIsShowSidebar(!isShowSidebar);
    };

    const sidebarRef = useClickOutside(() => {
        setIsShowSidebar(false);
    });

    const openMenu = () => {
        setIsShowSidebar(true);
    };

    const infoAdmin = useSelector((state) => state.auth.userInfo);
    if (infoAdmin.data === null || infoAdmin.data.roleId !== "ADMIN") {
        return <Navigate to={ROUTES.USER.HOME} />;
    }

    return (
        <S.WrapperAdmin>
            <HeaderAdmin openMenu={openMenu} />
            <div ref={sidebarRef}>
                <SidebarAdmin
                    isShowSidebar={isShowSidebar}
                    toggle={toggleShowSidebar}
                />
            </div>
            <S.ContainerAdmin>
                <Outlet />
            </S.ContainerAdmin>
        </S.WrapperAdmin>
    );
}

export default LayoutAdmin;
