import styled from "styled-components";

export const ContainerImage = styled.div`
  width: 100%;
  min-height: 100%;
  @media screen and (max-width: 600px) {
    min-height: 300px;
  }
  border-radius: 10px;
  cursor: pointer;
  transition: 0.8s;
  background: ${(props) => (props.src ? `url(${props.src})` : "transparent")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ModalImage = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 10px;
  cursor: "pointer";
  transition: 0.8s;
  background: ${(props) => (props.src ? `url(${props.src})` : "transparent")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
