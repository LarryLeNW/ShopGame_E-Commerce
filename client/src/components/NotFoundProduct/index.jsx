import ImageNotFound from "../../Images/NotFoundProduct.jpg";
import * as S from "./style";

function NotFoundProduct() {
  return (
    <S.Wrapper>
      <img src={ImageNotFound} alt="404 Images"></img>
    </S.Wrapper>
  );
}

export default NotFoundProduct;
