import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { ROUTES } from "../../constants/routes";
import { useState } from "react";
import axios from "axios";

function ResetPassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginForm] = Form.useForm();
    const { token } = useParams();
    const handleSubmit = async (values) => {
        setErr("");
        setLoading(true);
        try {
            await axios.post("http://localhost:6789/resetPassword", {
                password: values.password,
                token,
            });
            notification.success({
                message: "Password của bạn đã được thay đổi",
                duration: 1,
            });
            navigate(ROUTES.LOGIN);
            setLoading(false);
        } catch (error) {
            setErr(error.response.data.message);
            setLoading(false);
        }
    };

    if (userInfo?.data?.roleId === "USER")
        return <Navigate to={ROUTES.USER.HOME} />;
    if (userInfo?.data?.roleId === "ADMIN")
        return <Navigate to={ROUTES.ADMIN.DASHBOARD} />;
    return (
        <S.LoginWrapper>
            <S.LoginContainer>
                <S.LoginTitle>Reset Password</S.LoginTitle>
                <Form
                    form={loginForm}
                    name="loginForm"
                    layout="vertical"
                    onFinish={(values) => handleSubmit(values)}
                >
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Mật khẩu là bắt buộc",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                            {
                                required: true,
                                message: "Xác nhận mật khẩu là bắt buộc",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "Xác nhận mật khẩu không khớp"
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    {err && (
                        <div style={{ color: "red", fontStyle: "italic" }}>
                            {err}
                        </div>
                    )}
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={loading}
                    >
                        Reset
                    </Button>
                </Form>
            </S.LoginContainer>
        </S.LoginWrapper>
    );
}

export default ResetPassword;
