import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { useEffect } from "react";
import { getUserRequest } from "../../../redux/slicers/user.slice";
import { useState } from "react";
import { notification } from "antd";

function Search() {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo.data);
    let [name, setSearchName] = useState("");

    useEffect(() => {
        if (userInfo) {
            dispatch(
                getUserRequest({
                    name,
                    roleId: "USER",
                })
            );
        }
    }, [userInfo]);

    let handleFind = () => {
        if (userInfo) {
            dispatch(
                getUserRequest({
                    name,
                    roleId: "USER",
                })
            );
            return;
        }
        notification.warning({
            message: "Vui lòng đăng nhập với admin để sử dụng tính năng này . ",
            duration: 1,
        });
    };

    return (
        <S.WrapperSearch>
            <div className="searchForm">
                <input
                    type="text"
                    placeholder={"Find a user"}
                    onKeyDown={handleFind}
                    onChange={(e) => setSearchName(e.target.value)}
                    value={name}
                />
            </div>
        </S.WrapperSearch>
    );
}

export default Search;
