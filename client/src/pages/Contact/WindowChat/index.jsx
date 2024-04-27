import dayjs from "dayjs";
import HomeIcon from "../../../Images/home.png";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { db, storage } from "../../../firebase/init";
import { notification } from "antd";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as S from "./style";

import {
    arrayUnion,
    doc,
    onSnapshot,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";

function WindowChat() {
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.auth.userInfo);
    let { chatId, userConnect } = useSelector((state) => state.chat);
    const [messages, setMessages] = useState([]);
    const ref = useRef();
    const [text, setText] = useState("");
    // const [img, setImg] = useState(null);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [ref]);

    useEffect(() => {
        if (chatId) {
            const unSub = onSnapshot(doc(db, "chats", chatId), (doc) => {
                doc.exists() && setMessages(doc.data().messages);
            });
            return () => {
                unSub();
            };
        }
    }, [chatId, data]);

    const handleSend = async () => {
        if (!data) {
            notification.warning({
                message: "Vui lòng đăng nhập để nhắn tin",
                duration: 1,
            });
            return;
        }
        if (text.length == 0) {
            notification.warning({
                message: "Vui gõ chữ vào input",
                duration: 1,
            });
            return;
        }

        try {
            // if (img) {
            //     const storageRef = ref(storage, uuid());
            //     const uploadTask = uploadBytesResumable(storageRef, img);
            //     uploadTask.on(
            //         (error) => {
            //             console.log(error);
            //         },
            //         () => {
            //             getDownloadURL(uploadTask.snapshot.ref).then(
            //                 async (downloadURL) => {
            //                     await updateDoc(doc(db, "chats", chatId), {
            //                         messages: arrayUnion({
            //                             id: uuid(),
            //                             text,
            //                             senderId: data?.id,
            //                             date: Timestamp.now(),
            //                             img: downloadURL,
            //                         }),
            //                     });
            //                 }
            //             );
            //         }
            //     );
            // } else {
            await updateDoc(doc(db, "chats", chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: data?.id,
                    date: new Date(),
                }),
            });
            // }
            await updateDoc(doc(db, "userChats", data.id), {
                [chatId + ".lastMessage"]: {
                    text,
                },
                [chatId + ".date"]: new Date(),
            });
            await updateDoc(doc(db, "userChats", "idadmin"), {
                [chatId + ".lastMessage"]: {
                    text,
                },
                [chatId + ".date"]: new Date(),
            });
            setText("");
            // setImg(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <S.WrapperWindowChat>
            <S.ChatInfo>
                <div>
                    {data?.roleId !== "ADMIN" ? (
                        <S.TitleMain style={{ textAlign: "center" }}>
                            Liên hệ với Admin ❤️
                        </S.TitleMain>
                    ) : (
                        <span>{userConnect?.name}</span>
                    )}
                </div>
                <S.ChatIcons>
                    {!data && (
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                navigate(ROUTES.LOGIN);
                            }}
                        >
                            Đăng nhập
                        </span>
                    )}
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            if (data?.roleId === "ADMIN")
                                navigate(ROUTES.ADMIN.DASHBOARD);
                            else navigate(ROUTES.USER.HOME);
                        }}
                    >
                        <img src={HomeIcon} alt="homeicon"></img>
                    </span>
                </S.ChatIcons>
            </S.ChatInfo>
            <S.FrameMessages>
                {messages ? (
                    messages.map((mess) => {
                        let avatarMess =
                            mess.senderId !== data?.id
                                ? userConnect.avatar
                                : data.avatar;
                        console.log(mess.date);
                        return (
                            <div
                                key={mess?.id}
                                ref={ref}
                                className={`message ${
                                    mess.senderId === data?.id && "owner"
                                }`}
                            >
                                <div className="messageInfo">
                                    <img
                                        src={avatarMess}
                                        alt="avatar user chat"
                                    />
                                    <span>
                                        {dayjs(
                                            new Date(mess.date.seconds * 1000)
                                        ).fromNow()}
                                    </span>
                                </div>
                                <div className="messageContent">
                                    <p>{mess.text}</p>
                                    {mess.img && <img src={mess.img} alt="" />}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>Chưa có tin nhắn nào ...</div>
                )}
            </S.FrameMessages>
            <S.WrapperInput>
                <input
                    type="text"
                    placeholder="Type something..."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <div className="send">
                    <button onClick={handleSend}>Send</button>
                </div>
            </S.WrapperInput>
        </S.WrapperWindowChat>
    );
}

export default WindowChat;
