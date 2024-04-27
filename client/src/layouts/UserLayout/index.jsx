import { Navigate, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import * as S from "./style";
import { ROUTES } from "../../constants/routes";
import { useSelector } from "react-redux";

function UserLayout() {
  const infoAdmin = useSelector((state) => state.auth.userInfo);
  if (infoAdmin.data && infoAdmin.data.roleId === "ADMIN") {
    return <Navigate to={ROUTES.ADMIN.DASHBOARD} />;
  }
  return (
    <S.UserLayoutWrapper>
      <Header />
      <S.MainWrapper>
        <Outlet />
      </S.MainWrapper>
      <Footer />
    </S.UserLayoutWrapper>
  );
}

export default UserLayout;
