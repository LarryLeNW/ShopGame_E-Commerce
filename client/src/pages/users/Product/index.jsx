import { useNavigate, generatePath, useParams } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import * as S from "./style";

function Product({
  name,
  src,
  price,
  discount = 0,
  productId,
  remainingPrice,
}) {
  const navigate = useNavigate();
  return (
    <S.WrapperProduct>
      <img src={src} alt="img_product"></img>
      <S.TitleProduct> Mã : {name} </S.TitleProduct>
      <S.PriceProduct> Giá : {price.toLocaleString()} VNĐ</S.PriceProduct>
      {discount !== 0 && (
        <S.PriceReduce>
          Giảm còn : {remainingPrice.toLocaleString()} VNĐ
        </S.PriceReduce>
      )}
      <S.ButtonProduct
        onClick={() => {
          navigate(
            generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: productId,
            })
          );
        }}
      >
        XEM
      </S.ButtonProduct>
    </S.WrapperProduct>
  );
}

export default Product;
