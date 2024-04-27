import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { loginOthersRequest } from "../../../redux/slicers/auth.slice";
import { ROUTES } from "../../../constants/routes";

function LoginSuccess() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, tokenLogin } = useParams();
  dispatch(
    loginOthersRequest({
      data: {
        userId,
        tokenLogin,
      },
      callback: (role) => {
        if (role === "ADMIN") navigate(ROUTES.ADMIN.DASHBOARD);
        if (role === "USER") navigate(ROUTES.USER.HOME);
      },
    })
  );

  return <Navigate to={"/"}></Navigate>;
}

export default LoginSuccess;
