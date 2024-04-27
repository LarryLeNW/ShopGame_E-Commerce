import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";
import { GithubAuth, GoogleAuth } from "../../firebase/firebase";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { ROUTES } from "../../constants/routes";
import {
    loginOthersRequest,
    loginRequest,
} from "../../redux/slicers/auth.slice";
import { useEffect } from "react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);
    const [loginForm] = Form.useForm();

    useEffect(() => {
        if (userInfo.error) {
            loginForm.setFields([
                {
                    name: "email",
                    errors: [" "],
                },
                {
                    name: "password",
                    errors: [userInfo.error],
                },
            ]);
        }
    }, [userInfo.error]);

    const handleSubmit = (values) => {
        dispatch(
            loginRequest({
                data: values,
                callback: (roleId, name) => {
                    if (roleId === "0") {
                        navigate(ROUTES.USER.HOME);
                        notification.success({
                            message: `Welcome ${name}`,
                            duration: 2,
                        });
                    } else if (roleId === "1") navigate(ROUTES.ADMIN.DASHBOARD);
                },
            })
        );
    };

    let LoginWithGG = async () => {
        try {
            const auth = await GoogleAuth();
            if (auth.user) {
                dispatch(
                    loginOthersRequest({
                        data: auth.user,
                        callback: () => {
                            navigate(ROUTES.USER.HOME);
                        },
                    })
                );
            }
        } catch (error) {
            console.log(
                "🚀 ~ file: LoginPage.jsx:11 ~ OnButtonClick ~ error:",
                error
            );
        }
    };
    let LoginWithGithub = async () => {
        try {
            const auth = await GithubAuth();
            if (auth.user) {
                dispatch(
                    loginOthersRequest({
                        data: auth.user,
                        callback: () => {
                            navigate(ROUTES.USER.HOME);
                        },
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (userInfo?.data?.roleId === "USER")
        return <Navigate to={ROUTES.USER.HOME} />;
    if (userInfo?.data?.roleId === "ADMIN")
        return <Navigate to={ROUTES.ADMIN.DASHBOARD} />;
    return (
        <S.LoginWrapper>
            {userInfo.loading ? (
                <Loading />
            ) : (
                <S.LoginContainer>
                    <S.LoginTitle>Login</S.LoginTitle>
                    <Form
                        form={loginForm}
                        name="loginForm"
                        layout="vertical"
                        onFinish={(values) => handleSubmit(values)}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <div
                            style={{
                                marginBottom: 16,
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <div>
                                Bạn chưa có tài khoản?{" "}
                                <Link to={ROUTES.REGISTER}>Đăng ký</Link>
                            </div>
                            <Link to={ROUTES.FORGOT_PASSWORD}>
                                Quên mật khẩu
                            </Link>
                        </div>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            loading={userInfo.loading}
                        >
                            Đăng nhập
                        </Button>
                    </Form>
                    <div
                        style={{
                            fontSize: "20px",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        or
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <S.ButtonMXH
                            color={"orange"}
                            onClick={() => {
                                LoginWithGG();
                            }}
                        >
                            <GoogleOutlined />
                        </S.ButtonMXH>
                        <S.ButtonMXH
                            color={"blue"}
                            onClick={() => {
                                LoginWithGithub();
                            }}
                        >
                            <GithubOutlined />
                        </S.ButtonMXH>
                    </div>
                </S.LoginContainer>
            )}
        </S.LoginWrapper>
    );
}

export default Login;
