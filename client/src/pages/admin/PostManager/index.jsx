import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostRequest,
  getPostRequest,
} from "../../../redux/slicers/post.slise";
import { format } from "date-fns";

import * as S from "./style";
import { Button, Popconfirm, notification } from "antd";
import ModalPost from "./Modal/Modal";
import { useState } from "react";
function PostManager() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.post);
  const [isModalOpen, setModalOpen] = useState(false);
  const [postCurrent, setPostCurrent] = useState(null);
  console.log(
    "🚀 ~ file: index.jsx:18 ~ PostManager ~ postCurrent:",
    postCurrent
  );

  useEffect(() => {
    dispatch(getPostRequest());
  }, []);

  const handleDeletePost = (id) => {
    dispatch(
      deletePostRequest({
        id,
        callback: () => {
          notification.success({
            message: `Xóa thành công <3`,
            duration: 1,
          });
        },
      })
    );
  };
  const clearPostCurrent = () => {
    setPostCurrent(null);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    clearPostCurrent();
  };

  return (
    <S.Wrapper>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <S.TitleMain>Danh sách bài đăng </S.TitleMain>
      </div>
      <S.WrapperPost>
        {data &&
          data.map((item) => (
            <S.ContainerPost key={item.id}>
              <S.WrapperInfoPoster>
                <div
                  style={{
                    borderBottom: "1px solid black",
                    fontWeight: "bold",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: " 0 20px",
                  }}
                >
                  <div>Người đăng</div>

                  <Button
                    onClick={() => {
                      setPostCurrent(item);
                      setModalOpen(true);
                    }}
                  >
                    Sửa
                  </Button>
                  <Popconfirm
                    title="Lưu ý"
                    description="Bạn có chắc xóa bài đăng này ?"
                    onConfirm={() => handleDeletePost(item.id)}
                  >
                    <Button>
                      <i
                        style={{ color: "red" }}
                        class="fa-solid fa-rectangle-xmark "
                      ></i>
                    </Button>
                  </Popconfirm>
                </div>
                <S.InfoPoster>
                  <S.AvatarPoster
                    src={item.infoPoster.avatar}
                    alt={item.infoPoster.avatar}
                  />
                  <S.NamePoster>{item.infoPoster.name}</S.NamePoster>
                  <S.TimeCreate>
                    {format(new Date(item.updatedAt), "dd:MM:yyyy")}
                  </S.TimeCreate>
                </S.InfoPoster>
              </S.WrapperInfoPoster>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  fontStyle: "inherit",
                }}
              >
                Tiêu đề
              </div>
              <S.TitlePosted>{item.title}</S.TitlePosted>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  fontStyle: "inherit",
                }}
              >
                Nội dung
              </div>
              <S.ContentPosted>{item.content}</S.ContentPosted>
            </S.ContainerPost>
          ))}
      </S.WrapperPost>
      <Button
        type="primary"
        style={{ width: "100%" }}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Tạo bài Post
      </Button>
      <ModalPost
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        postCurrent={postCurrent}
        clearPostCurrent={clearPostCurrent}
      />
    </S.Wrapper>
  );
}

export default PostManager;
