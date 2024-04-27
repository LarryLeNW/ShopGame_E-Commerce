import { useEffect } from "react";
import _ from "lodash";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
    createCommentRequest,
    createReactionRequest,
    getPostRequest,
} from "../../redux/slicers/post.slise";
import * as S from "./style";
import Loading from "../../components/Loading/Loading";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentDots,
    faFaceLaughSquint,
    faFaceSadTear,
    faShareFromSquare,
    faThumbsDown,
    faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { Input, notification, Button } from "antd";
import likeIcon from "../../Images/like.png";
import dislikeIcon from "../../Images/dislike.png";
import sadIcon from "../../Images/sad.png";
import happyIcon from "../../Images/happy.png";
import sendIcon from "../../Images/send.png";
import { useState } from "react";

function PostPage() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.post);
    const userInfo = useSelector((state) => state.auth.userInfo.data);
    const [indexShowInputComment, setShowInputComment] = useState(-1);
    let [commentByForm, setCommentByForm] = useState("");
    let reactionByUser = [];
    useEffect(() => {
        dispatch(getPostRequest());
    }, []);

    if (!!data && userInfo) {
        reactionByUser = [];
        for (let iPost = 0; iPost < data.length; iPost++) {
            let reactionFound = false;
            for (const element of data[iPost].reactions) {
                if (element.userId === userInfo?.id) {
                    reactionByUser.push({
                        iPost,
                        iReaction: element.ReactionType,
                    });
                    reactionFound = true;
                    break;
                }
            }
            if (!reactionFound) {
                reactionByUser.push({
                    iPost,
                    iReaction: null,
                });
            }
        }
    }

    let handleUserUpdateStatus = (postId, ReactionType) => {
        if (!userInfo) {
            notification.warning({
                message: "Vui lòng đăng nhập",
                duration: 1,
            });
            return;
        }
        dispatch(
            createReactionRequest({
                data: {
                    userId: userInfo?.id,
                    postId,
                    ReactionType,
                },
                callback: () => {},
            })
        );
    };

    let handleUserComment = (postId) => {
        if (!userInfo) {
            notification.warning({
                message: "Vui lòng đăng nhập",
                duration: 1,
            });
            return;
        }
        if (_.isEmpty(commentByForm)) {
            notification.warning({
                message: "Nhập bình luận trên 1 kí tự ",
                duration: 1,
            });
            return;
        }

        dispatch(
            createCommentRequest({
                data: {
                    userId: userInfo?.id,
                    postId,
                    content: commentByForm,
                    adminCheck: false,
                },
                callback: () => {
                    setCommentByForm("");
                },
            })
        );
    };
    return (
        <S.Wrapper>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {data?.map((item, index) => (
                        <S.WrapperPost key={item.id}>
                            <S.HeaderPost>
                                <S.InfoPoster>
                                    <S.TitlePoster>
                                        {item.infoPoster.name}
                                    </S.TitlePoster>
                                    <S.AvatarPoster>
                                        <img
                                            style={{ borderRadius: "10px" }}
                                            src={item.infoPoster.avatar}
                                            alt={item.infoPoster.avatar}
                                        ></img>
                                    </S.AvatarPoster>
                                </S.InfoPoster>
                                <div>
                                    Cập nhật lúc :{" "}
                                    {format(
                                        new Date(item.updatedAt),
                                        "dd:MM:yyyy"
                                    )}
                                </div>
                            </S.HeaderPost>
                            <S.WrapperContent>
                                <S.Title>{item.title}</S.Title>
                                <S.Content>{item.content}</S.Content>
                            </S.WrapperContent>
                            <S.WrapperCareAbout />
                            <S.WrapperStatusPost>
                                {item?.reactions?.length ? (
                                    <div style={{ display: "flex" }}>
                                        <div>{item?.reactions?.length}</div>
                                        <div style={{ marginLeft: "10px" }}>
                                            {item?.typeCategory?.includes(
                                                "like"
                                            ) && (
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                />
                                            )}
                                            {item?.typeCategory?.includes(
                                                "dislike"
                                            ) && (
                                                <FontAwesomeIcon
                                                    icon={faThumbsDown}
                                                />
                                            )}
                                            {item?.typeCategory?.includes(
                                                "happy"
                                            ) && (
                                                <FontAwesomeIcon
                                                    icon={faFaceLaughSquint}
                                                />
                                            )}
                                            {item?.typeCategory?.includes(
                                                "sad"
                                            ) && (
                                                <FontAwesomeIcon
                                                    icon={faFaceSadTear}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div>Chưa có cảm xúc nào.</div>
                                )}
                                {item.comments.length && (
                                    <div>
                                        <span>{item.comments.length}</span>
                                        <FontAwesomeIcon icon={faCommentDots} />
                                    </div>
                                )}
                            </S.WrapperStatusPost>
                            <S.WrapperControl>
                                <HeadlessTippy
                                    interactive
                                    render={(attrs) => (
                                        <S.WrapperStatus
                                            tabIndex="-1"
                                            {...attrs}
                                        >
                                            <S.WrapperIconStatus
                                                onClick={() => {
                                                    handleUserUpdateStatus(
                                                        item.id,
                                                        "like"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src={likeIcon}
                                                    alt="likeIcon"
                                                    height={"20x"}
                                                    width={"20px"}
                                                ></img>
                                            </S.WrapperIconStatus>
                                            <S.WrapperIconStatus
                                                onClick={() => {
                                                    handleUserUpdateStatus(
                                                        item.id,
                                                        "dislike"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src={dislikeIcon}
                                                    alt="likeIcon"
                                                    height={"20x"}
                                                    width={"20px"}
                                                ></img>
                                            </S.WrapperIconStatus>
                                            <S.WrapperIconStatus
                                                onClick={() => {
                                                    handleUserUpdateStatus(
                                                        item.id,
                                                        "happy"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src={happyIcon}
                                                    alt="likeIcon"
                                                    height={"20x"}
                                                    width={"20px"}
                                                ></img>
                                            </S.WrapperIconStatus>
                                            <S.WrapperIconStatus
                                                onClick={() => {
                                                    handleUserUpdateStatus(
                                                        item.id,
                                                        "sad"
                                                    );
                                                }}
                                            >
                                                <img
                                                    src={sadIcon}
                                                    alt="likeIcon"
                                                    height={"20x"}
                                                    width={"20px"}
                                                ></img>
                                            </S.WrapperIconStatus>
                                        </S.WrapperStatus>
                                    )}
                                >
                                    <S.IconControl>
                                        {!userInfo && (
                                            <FontAwesomeIcon
                                                icon={faThumbsUp}
                                            />
                                        )}
                                        {reactionByUser[index]?.iReaction ===
                                            null && (
                                            <FontAwesomeIcon
                                                icon={faThumbsUp}
                                            />
                                        )}
                                        {reactionByUser[index]?.iReaction ===
                                            "sad" && (
                                            <S.WrapperIconActive>
                                                <FontAwesomeIcon
                                                    icon={faFaceSadTear}
                                                />
                                            </S.WrapperIconActive>
                                        )}
                                        {reactionByUser[index]?.iReaction ===
                                            "like" && (
                                            <S.WrapperIconActive>
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                />
                                            </S.WrapperIconActive>
                                        )}
                                        {reactionByUser[index]?.iReaction ===
                                            "dislike" && (
                                            <S.WrapperIconActive>
                                                <FontAwesomeIcon
                                                    icon={faThumbsDown}
                                                />
                                            </S.WrapperIconActive>
                                        )}
                                        {reactionByUser[index]?.iReaction ===
                                            "happy" && (
                                            <S.WrapperIconActive>
                                                <FontAwesomeIcon
                                                    icon={faFaceLaughSquint}
                                                />
                                            </S.WrapperIconActive>
                                        )}
                                    </S.IconControl>
                                </HeadlessTippy>
                                <S.IconControl
                                    onClick={() => {
                                        setShowInputComment(index);
                                        setCommentByForm("");
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </S.IconControl>
                                <S.IconControl>
                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                </S.IconControl>
                            </S.WrapperControl>
                            <S.WrapperCommentUser>
                                {item.comments.map((comment) => (
                                    <S.ContainerCommentUser key={comment.id}>
                                        <S.InfoComment>
                                            <div style={{ fontWeight: "bold" }}>
                                                {comment.infoComment.name}
                                            </div>
                                            <S.AvatarComment>
                                                <img
                                                    style={{
                                                        borderRadius: "10px",
                                                    }}
                                                    src={
                                                        comment.infoComment.avatar.includes(
                                                            "http"
                                                        )
                                                            ? comment
                                                                  .infoComment
                                                                  .avatar
                                                            : `http://localhost:6789/Images/${comment.infoComment.avatar}`
                                                    }
                                                    alt={
                                                        comment.infoComment
                                                            .avatar
                                                    }
                                                ></img>
                                            </S.AvatarComment>
                                            <div>
                                                {" "}
                                                {dayjs(
                                                    comment.updatedAt
                                                ).fromNow()}
                                            </div>
                                            <div>
                                                {comment.adminCheck ? (
                                                    <div>Đã xem</div>
                                                ) : (
                                                    <div>Chưa xem</div>
                                                )}
                                            </div>
                                        </S.InfoComment>
                                        <S.ContentComment>
                                            {comment.content}
                                        </S.ContentComment>
                                    </S.ContainerCommentUser>
                                ))}
                            </S.WrapperCommentUser>
                            {indexShowInputComment === index && (
                                <div>
                                    <Input
                                        value={commentByForm}
                                        onChange={(e) => {
                                            setCommentByForm(e.target.value);
                                        }}
                                    ></Input>
                                    <Button
                                        type="primary"
                                        style={{ width: "100%" }}
                                        onClick={() => {
                                            handleUserComment(item.id);
                                        }}
                                    >
                                        Gửi{" "}
                                        <img src={sendIcon} alt="sendIcon" />
                                    </Button>
                                </div>
                            )}
                        </S.WrapperPost>
                    ))}
                </>
            )}
        </S.Wrapper>
    );
}

export default PostPage;
