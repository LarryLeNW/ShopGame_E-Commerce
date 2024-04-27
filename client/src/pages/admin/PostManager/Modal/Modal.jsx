import { Form, Input, Modal, Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  createPostRequest,
  editPostRequest,
} from "../../../../redux/slicers/post.slise";

function ModalPost({
  isModalOpen,
  handleCancel,
  postCurrent,
  clearPostCurrent,
}) {
  const dispatch = useDispatch();
  const infoAdmin = useSelector((state) => state.auth.userInfo.data);
  const { loading } = useSelector((state) => state.post);
  const [postForm] = Form.useForm();

  if (postCurrent) {
    postForm.setFieldValue("title", postCurrent.title);
    postForm.setFieldValue("content", postCurrent.content);
  } else {
    postForm.resetFields();
  }

  let handleCreatePost = (values) => {
    dispatch(
      createPostRequest({
        data: { ...values, userId: infoAdmin.id },
        callback: () => {
          handleCancel();
          notification.success({
            message: `Tạo thành công <3`,
            duration: 1,
          });
          postForm.resetFields();
        },
      })
    );
  };
  let handleEditPost = (values) => {
    dispatch(
      editPostRequest({
        data: { ...values, id: postCurrent.id },
        callback: () => {
          handleCancel();
          notification.success({
            message: `Sửa thành công <3`,
            duration: 1,
          });
          postForm.resetFields();
          clearPostCurrent();
        },
      })
    );
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        form={postForm}
        name="postForm"
        layout="vertical"
        onFinish={(values) => {
          if (postCurrent) {
            handleEditPost(values);
            return;
          }
          handleCreatePost(values);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Tên tiêu đề"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Nội dung"
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your new content!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          {postCurrent ? "Edit" : "Tạo"}
        </Button>
      </Form>
    </Modal>
  );
}

export default ModalPost;
