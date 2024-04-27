import { useSelector } from "react-redux";
import PaymentIcon from "../../../Images/payment.svg";
import { Table } from "antd";
import Paypal from "../../../utils/Paypal";
import { useEffect, useState } from "react";
function CheckoutPage() {
  const { cartList } = useSelector((state) => state.cart);

  const [subtotal, setSubtotal] = useState(null);

  useEffect(() => {
    let sum = cartList?.reduce((sum, e) => e.priceProduct + sum, 0);
    setSubtotal(sum);
  }, [cartList]);

  const tableColumn = [
    {
      title: "Name",
      dataIndex: "nameProduct",
      key: "nameProduct",
    },
    {
      title: "Price",
      dataIndex: "priceProduct",
      key: "priceProduct",
      render: (_, item) => {
        return `${item?.priceProduct?.toLocaleString()} VNĐ`;
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        padding: "8px",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <div>
        <img
          style={{
            width: "100%",
            objectFit: "contain",
          }}
          src={PaymentIcon}
          alt="icon-payment"
        ></img>
      </div>
      <div>
        <h2>Checkout your order </h2>
        <Table
          columns={tableColumn}
          dataSource={cartList}
          rowKey="id"
          pagination={false}
        ></Table>
        <div style={{ textAlign: "center" }}>
          <span>Subtotal : </span>
          <span style={{ color: "red" }}>{subtotal?.toLocaleString()} VNĐ</span>
        </div>
        <div>
          <Paypal  amount={Math.round(subtotal / 24.4)} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
