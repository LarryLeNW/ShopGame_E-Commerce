import styled, { css } from "styled-components";

export const FormUserInfo = styled.div`
  
`;

export const WrapperFormAvatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  ${(props) => css`
    border: 2px solid ${props.theme.color};
    box-shadow: 0 0 5px ${props.theme.color};
  `}
  margin-bottom : 15px;

`;

export const ContainerUserInfo = styled.div``;

export const Label = styled.label`
  cursor: pointer;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #cea8ca;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 120px;
  border: 1px solid black;
  box-shadow: 0 0 5px black;
  &:hover {
    box-shadow: 0 0 5px white;
    background-color: black;
  }
  transition: 1.2s;
`;

export const InputDisable = styled.div`
  color: ${(props) => props.theme.bg};
  background: ${(props) => props.theme.color};
  padding: 5px;
  border-radius: 5px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const InputHide = styled.input`
  display: none;
`;
