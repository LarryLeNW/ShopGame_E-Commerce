import { useEffect, useState } from "react";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { changeUserConnect } from "../../../redux/slicers/chat.slice";
import DefaultAvatar from "../../../Images/defaultAvatar.jpg";
import {
    doc,
    getDoc,
    onSnapshot,
    serverTimestamp,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/init";
import { notification } from "antd";

function UserChat() {
    const dispatch = useDispatch();
    const listUserChat = useSelector((state) => state.user.data);
    const userInfo = useSelector((state) => state.auth.userInfo.data);
    const { userConnect } = useSelector((state) => state.chat);
    const [userChats, setUserChats] = useState([]);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(
                doc(db, "userChats", userInfo.id),
                (doc) => {
                    setUserChats(doc.data());
                }
            );
            return () => {
                unsub();
            };
        };
        userInfo && getChats();
    }, [userInfo]);

    const handleSelect = async (u) => {
        if (!userInfo) {
            notification.warning({
                message: "Plz login to chat",
                duration: 1,
            });
            return;
        }
        dispatch(
            changeUserConnect({
                userSelect: u,
                userCurrent: userInfo,
            })
        );
    };

    return (
        <S.WrapperListUserChat>
            {Object.entries(userChats)
                ?.sort((a, b) => b[1].date - a[1].date)
                .map((user, index) => {
                    console.log(user);
                    if (userInfo?.id !== user?.id) {
                        return (
                            <S.WrapperUserChat
                                key={index}
                                onClick={() => handleSelect(user[1].userInfo)}
                            >
                                <img
                                    src={user[1]?.userInfo?.avatar}
                                    alt="Avatar User"
                                />
                                <div className="userChatInfo">
                                    <span>{user[1]?.userInfo?.name}</span>
                                    <p>{user[1].lastMessage?.text}</p>
                                </div>
                            </S.WrapperUserChat>
                        );
                    }
                })}
        </S.WrapperListUserChat>
    );
}

export default UserChat;
