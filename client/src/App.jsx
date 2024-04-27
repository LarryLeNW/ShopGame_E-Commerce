import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import HomePage from "./pages/users/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { ROUTES } from "./constants/routes";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./themes";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Contact from "./pages/Contact";
import PostPage from "./pages/PostPage";
import { getUserInfoRequest } from "./redux/slicers/auth.slice";
import LayoutAdmin from "./layouts/AdminLayout";
import ProductManagement from "./pages/admin/componentContent/ProductManagement";
import UserManagement from "./pages/admin/componentContent/UserManagement";
import ProductList from "./pages/users/ProductList/ProductList";
import ProductDetail from "./pages/users/ProductDetail";
import UserInfoPage from "./pages/users/UserInfo";
import OrderHistoriesPage from "./pages/users/OrderHistories";
import ChangePasswordPage from "./pages/users/ChangePassword";
import ProfileLayout from "./layouts/ProfileLayout";
import CartPage from "./pages/users/Cart";
import CheckoutPage from "./pages/users/Checkout";
import { notification } from "antd";
import LoginSuccess from "./pages/users/CheckLogin";
import PostManager from "./pages/admin/PostManager";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DashboardPage from "./pages/admin/Dashboard";

function App() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.common.theme);
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.auth.userInfo);
    console.log("🚀 ~ file: App.jsx:38 ~ App ~ data:", data);

    useEffect(() => {
        let token = Cookies.get("jwt");
        if (token) {
            dispatch(
                getUserInfoRequest({
                    token,
                    callback: (roleId, name) => {
                        if (roleId === "USER") {
                            navigate(ROUTES.USER.HOME);
                            notification.success({
                                message: `Welcome ${name}`,
                                duration: 2,
                            });
                        } else if (roleId === "ADMIN")
                            navigate(ROUTES.ADMIN.DASHBOARD);
                    },
                })
            );
        }
    }, []);

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}>
            <Routes>
                <Route element={<LayoutAdmin />}>
                    <Route
                        path={ROUTES.ADMIN.DASHBOARD}
                        element={<DashboardPage />}
                    />
                    <Route
                        path={ROUTES.ADMIN.PRODUCT_MANAGEMENT}
                        element={<ProductManagement />}
                    />
                    <Route
                        path={ROUTES.ADMIN.USER_MANAGEMENT}
                        element={<UserManagement />}
                    />
                    <Route
                        path={ROUTES.ADMIN.POST_MANAGEMENT}
                        element={<PostManager />}
                    />
                    {data?.roleId == "ADMIN" && (
                        <Route path={ROUTES.CONTACT} element={<Contact />} />
                    )}
                </Route>

                <Route element={<UserLayout />}>
                    <Route
                        path={ROUTES.USER.HOME}
                        element={<HomePage />}
                    ></Route>
                    <Route
                        path={ROUTES.USER.PRODUCT_LIST}
                        element={<ProductList />}
                    />
                    <Route
                        path={ROUTES.USER.LOGIN_SUCCESS}
                        element={<LoginSuccess />}
                    />
                    <Route path={ROUTES.USER.CART} element={<CartPage />} />
                    <Route
                        path={ROUTES.USER.CHECKOUT}
                        element={<CheckoutPage />}
                    />
                    <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                    <Route
                        path={ROUTES.FORGOT_PASSWORD}
                        element={<ForgotPasswordPage />}
                    />
                    <Route
                        path={ROUTES.RESET_PASSWORD}
                        element={<ResetPassword />}
                    />
                    <Route path={ROUTES.POST} element={<PostPage />} />
                    <Route
                        path={ROUTES.USER.PRODUCT_DETAIL}
                        element={<ProductDetail />}
                    />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route element={<ProfileLayout />}>
                        <Route
                            path={ROUTES.USER.PROFILE}
                            element={<Navigate to={ROUTES.USER.USER_INFO} />}
                        />
                        <Route
                            path={ROUTES.USER.USER_INFO}
                            element={<UserInfoPage />}
                        />
                        <Route
                            path={ROUTES.USER.ORDER_HISTORY}
                            element={<OrderHistoriesPage />}
                        />
                        <Route
                            path={ROUTES.USER.CHANGE_PASSWORD}
                            element={<ChangePasswordPage />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
