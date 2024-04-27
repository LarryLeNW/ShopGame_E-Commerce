import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { ROUTES } from "../../constants/routes";
import { useEffect, useState } from "react";
import axios from "axios";

function ForgotPassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const [status, setStatus] = useState(false);

    const handleSubmit = async () => {
        setErr("");
        if (email.trim().length == 0) {
            setErr("Không được để trống...");
            return;
        }
        setLoading(true);
        try {
            await axios.post("http://localhost:6789/requirePassword", {
                email,
            });
            setLoading(false);
            setStatus(true);
        } catch (error) {
            setErr("Not found this account ....");
            setLoading(false);
        }
    };

    if (userInfo?.data?.roleId === "USER")
        return <Navigate to={ROUTES.USER.HOME} />;
    if (userInfo?.data?.roleId === "ADMIN")
        return <Navigate to={ROUTES.ADMIN.DASHBOARD} />;
    return (
        <S.LoginWrapper>
            {status ? (
                <div
                    style={{
                        background: "white",
                        fontSize: "2rem",
                        padding: "20px",
                    }}
                >
                    <a href="https://mail.google.com/" target="	_blank">
                        Kiểm tra email của bạn để hoàn tất reset password .
                        Thank you ❤️
                    </a>
                </div>
            ) : (
                <S.LoginContainer>
                    <S.Title>Tìm tài khoản của bạn</S.Title>
                    <S.Description>
                        Vui lòng nhập email hoặc số điện thoại để tìm kiếm tài
                        khoản của bạn.
                    </S.Description>
                    <S.InputCustom
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="Email hoặc số điện thoại"
                    ></S.InputCustom>
                    {err && (
                        <div style={{ color: "red", fontStyle: "initial" }}>
                            {err}
                        </div>
                    )}
                    <div style={{ width: "100%", textAlign: "end" }}>
                        <Button
                            style={{ background: "gray" }}
                            onClick={() => navigate(ROUTES.LOGIN)}
                        >
                            Hủy
                        </Button>
                        <Button
                            loading={loading}
                            style={{
                                marginLeft: "10px",
                                background: "#1877f2",
                                color: "white",
                            }}
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            Tìm kiếm
                        </Button>
                    </div>
                </S.LoginContainer>
            )}
        </S.LoginWrapper>
    );
}

export default ForgotPassword;
