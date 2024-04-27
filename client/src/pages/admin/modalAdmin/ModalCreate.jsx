import { Button, Modal, Form, Input, Select, notification } from "antd";
import { createProduct } from "../../../Services/AdminService";
import { useRef, useState } from "react";

function ModalCreate({ isShowModal, close, reload }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const InputRef = useRef();

  const handleFormSubmit = async (values) => {
    if (!fileList) {
      notification.error({
        message: " cho sản phẩm  !!!",
        duration: 2,
      });
      return;
    }

    if (+values.price < +values.discount) {
      notification.error({
        message: "Giá giảm không thể lớn hơn giá mặc định",
        duration: 2,
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("discount", values.discount);
    formData.append("description", values.description);
    formData.append("category", values.category);

    for (const file of fileList) {
      formData.append("images", file);
    }

    let res = await createProduct(formData);
    if (res.data.errCode === 0) {
      form.resetFields();
      InputRef.current.value = "";
      setFileList([]);
      close();
      reload();
      notification.success({
        message: "Tạo thành công  !!!",
        duration: 2,
      });
    } else if (res.data.errCode === 1) {
      notification.error({
        message: "Vui lòng thêm ảnh cho sản phẩm  !!!",
        duration: 2,
      });
    } else if (res.data.errCode === 2) {
      notification.error({
        message: "Sản phẩm đã tồn tại  !!!",
        duration: 2,
      });
    } else if (res.data.errCode === 99) {
      notification.error({
        message: "Vui lòng chọn ảnh png jng !!!",
        duration: 2,
      });
    }
  };

  const handleCloseModal = () => {
    close();
  };

  const handleOnchangeFile = (e) => {
    setFileList([...fileList, ...e.target.files]);
  };

  return (
    <Modal
      title="Create Product"
      visible={isShowModal}
      onCancel={handleCloseModal}
      footer={null}
    >
      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your price!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Discount"
          name="discount"
          rules={[
            {
              required: true,
              message: "Please input your discount!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Loại Acc" name={"category"}>
          <Select>
            <Select.Option value="1">Liên Minh</Select.Option>
            <Select.Option value="2">Liên Quân</Select.Option>
            <Select.Option value="3">Ngọc rồng</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Images">
          <input
            ref={InputRef}
            type="file"
            multiple
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleOnchangeFile}
          />
        </Form.Item>
        <div
          onClick={() => {
            setFileList([]);
            InputRef.current.value = "";
          }}
        >
          {fileList.length > 0 && (
            <div>
              <h2>Số ảnh đã chọn {fileList.length}</h2>
              Chọn lại hình ảnh <i class="fa-solid fa-rotate-right"></i>
            </div>
          )}
        </div>
        <Button type="primary" htmlType="submit">
          CREATE
        </Button>
      </Form>
    </Modal>
  );
}

export default ModalCreate;
