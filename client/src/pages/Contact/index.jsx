import * as S from "./style";

import Sidebar from "./Sidebar";
import WindowChat from "./WindowChat";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeUserConnect } from "../../redux/slicers/chat.slice";

function Contact() {
    let { data } = useSelector((state) => state.auth.userInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!!data && data?.roleId === "USER") {
            dispatch(
                changeUserConnect({
                    userSelect: {
                        id: "idadmin",
                        avatar: "https://firebasestorage.googleapis.com/v0/b/cccc-bd93c.appspot.com/o/files%2Ficons8-admin-100.png?alt=media&token=f31b1775-2ebd-47b6-9ae5-b499f8d7e477",
                    },
                    userCurrent: data,
                })
            );
        }
    }, []);

    return (
        <S.Wrapper>
            <S.Container>
                {data?.roleId === "ADMIN" && <Sidebar />}
                <WindowChat />
            </S.Container>
        </S.Wrapper>
    );
}

export default Contact;
