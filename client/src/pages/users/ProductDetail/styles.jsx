import styled from "styled-components";

export const WrapperProduct = styled.div`
  background-size: cover;
  padding: 20px;
`;

export const ContainerProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 50vh;
  background-color: black;
  border-radius: 5px;
  box-shadow: 0 0 1px white;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerImgProduct = styled.div`
  flex: 2;
  padding: 24px;
  @media screen and (max-width: 600px) {
    padding: 6px;
  }
`;

export const WrapperProductInfo = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  background-color: ${(props) =>
    props.theme.color === "white"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0.5)"};
  color: ${(props) => props.theme.bg};
  min-height: 80px;
  border-radius: 0 5px 5px 0;
  padding: 16px;
`;
export const TitleDetail = styled.div`
  display: flex;
  text-shadow: 0 0 20px blue;
  color: white !important;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const DescriptionDetail = styled.div`
  text-shadow: 0 0 20px red;
  color: white;
  font-size: 28px;
  text-align: start;
  max-height: 300px;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const PriceDetail = styled.div`
  text-shadow: 0 0 20px greenyellow;
  color: white;
  font-size: 28px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BtnCart = styled.div`
  width: 100%;
  min-height: 20px;
  font-weight: bold;
  font-size: 24px;
  border-radius: 5px;
  padding: 5px;
  color: white;
  background-color: #1d59d9;
  cursor: pointer;
`;
/// css review
export const WrapperReview = styled.div`
  margin-top: 20px;
  background-color: whitesmoke;
  color: black;
`;
export const TitleReview = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  text-shadow: 0 0 10px green;
  box-shadow: 0 1px 10px ${(props) => props.theme.color};
`;

export const ItemReview = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
  text-align: start;
`;

export const AvatarReview = styled.div`
  width: 100px;
  height: 100px;
  object-fit: "cover";
  box-shadow: 0 0 5px black;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const NameReview = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 0 10px ${(props) => props.theme.color};
`;

export const TimeReview = styled.div`
  opacity: 0.5;
`;

export const WrapperFormReview = styled.div``;
