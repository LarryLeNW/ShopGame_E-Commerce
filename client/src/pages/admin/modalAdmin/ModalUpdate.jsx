import { Button, Modal, Form, Input, notification } from "antd";
import { editProduct } from "../../../Services/AdminService";
import { useRef, useState, useEffect } from "react";

function ModalUpdate({ isShowModal, close, reload, productCurrent }) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const InputRef = useRef();

  useEffect(() => {
    if (productCurrent) {
      form.setFieldsValue({
        name: productCurrent.name,
        price: productCurrent.price,
        discount: productCurrent.discount,
        description: productCurrent.description,
      });
    }
  }, [isShowModal]);

  const handleFormSubmit = async (values) => {
    if (!fileList) {
      notification.error({
        message: "Vui lòng thêm ảnh cho sản phẩm  !!!",
        duration: 2,
      });
      return;
    }

    const formData = new FormData();
    formData.append("id", productCurrent.id);
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("discount", values.discount);
    formData.append("description", values.description);

    for (const file of fileList) {
      formData.append("images", file);
    }

    let res = await editProduct(formData);
    if (res.data.errorCode === 0) {
      form.resetFields();
      InputRef.current.value = "";
      setFileList([]);
      close();
      reload();
      notification.success({
        message: "Chỉnh sửa thành công  !!!",
        duration: 2,
      });
    } else if (res.data.errCode === 1) {
      notification.error({
        message: "Vui lòng thêm ảnh cho sản phẩm  !!!",
        duration: 2,
      });
    } else if (res.data.errCode === 2) {
      notification.error({
        message: "Sản phẩm đã tồn tại !!!",
        duration: 2,
      });
    }
  };

  const handleCloseModal = () => {
    form.resetFields();
    setFileList([]);
    InputRef.current.value = "";
    close();
  };

  const handleOnchangeFile = (e) => {
    setFileList([...fileList, ...e.target.files]);
  };
  return (
    <Modal
      title="Update Product"
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
          UPDATE
        </Button>
      </Form>
    </Modal>
  );
}

export default ModalUpdate;
