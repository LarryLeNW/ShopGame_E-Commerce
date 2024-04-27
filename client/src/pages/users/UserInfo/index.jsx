import { Input, Form, Button, DatePicker, notification } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import cameraIcon from "../../../Images/camera.png"
import * as S from "./style";
import {
    changeAvatarRequest,
    updateUserInfoRequest,
} from "../../../redux/slicers/auth.slice";

function UserInfo() {
    const [updateUserInfoForm] = Form.useForm();

    const { userInfo } = useSelector((state) => state.auth);
  
    const dispatch = useDispatch();

    const initialValues = {
        name: userInfo.data?.name,
        email: userInfo.data?.email,
        sdt: userInfo.data?.sdt,
        address: userInfo.data?.address,
        birthday: userInfo.data?.birthday
            ? dayjs(userInfo.data?.birthday)
            : dayjs(),
    };

    const handleUpdateUserInfo = (values) => {
        try {
            const dataUpdate = {
                ...values,
                id: userInfo.data?.id,
                roleId: 0,
                birthday: dayjs(values.birthday).valueOf(),
            };
            dispatch(updateUserInfoRequest(dataUpdate));
        } catch (error) {
            notification.warning({
                message: "Please select images",
                duration: 2,
            });
        }
    };

    const handleOnchangeAvatar = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("id", userInfo.data?.id);
            formData.append("images", file);
            dispatch(changeAvatarRequest(formData));
        }
    };
    return (
        <S.FormUserInfo>
            <div style={{ position: "relative", zIndex: "1" }}>
                <S.WrapperFormAvatar src={userInfo.data.avatar} alt={"may be img no exits , plz change avatar"} />
                <S.Label htmlFor="targetInputFile">
                    <img src={cameraIcon} alt="camera"></img>
                </S.Label>
            </div>
            <S.InputHide
                id="targetInputFile"
                type="file"
                onChange={(e) => handleOnchangeAvatar(e)}
            />
            <S.ContainerUserInfo >
            <Form
                form={updateUserInfoForm}
                name="updateUserInfoForm"
                layout="vertical"
                initialValues={initialValues}
                onFinish={(values) => handleUpdateUserInfo(values)}
            >
                <Form.Item label="Email" name="email">
                    <S.InputDisable>{userInfo.data?.email}</S.InputDisable>
                </Form.Item>
                <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="sdt"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ngày sinh"
                    name="birthday"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker placeholder="Chọn ngày" />
                </Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={userInfo.loading}
                >
                    Cập nhật
                </Button>
            </Form>
            </S.ContainerUserInfo>
       
        </S.FormUserInfo>
    );
}

export default UserInfo;
