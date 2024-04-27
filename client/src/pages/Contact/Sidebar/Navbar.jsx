import * as S from "./style";
import * as C from "../../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../../redux/slicers/auth.slice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import SupportIcon from "../../../Images/support.png";

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data } = useSelector((state) => state.auth.userInfo);
    return (
        <S.Navbar>
            <img src={SupportIcon} alt="support"></img>
            <div className="user">
                {data ? (
                    <>
                        <S.TitleMain>{data.name}</S.TitleMain>
                    </>
                ) : (
                    <C.TitleMain
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            navigate(ROUTES.LOGIN);
                        }}
                    >
                        Đăng nhập để chat trực tuyến{" "}
                    </C.TitleMain>
                )}
            </div>
        </S.Navbar>
    );
}

export default Navbar;
