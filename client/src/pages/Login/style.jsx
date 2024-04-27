import { styled, css } from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  padding: 20px;
`;

export const LoginContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  ${(props) => css`
    box-shadow: 0 0 16px ${props.theme.color};
  `};
  margin: 0 auto;
  padding: 20px;
  max-width: 400px;
  min-height: 400px;
  width: 100%;
  opacity: 0;
  border-radius: 5px;
  animation: fadeIn 0.5s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LoginTitle = styled.div`
  text-align: center;
  font-size: 26px;
  font-weight: 20px;
  border-bottom: 1px solid black;
  text-shadow: 0 0 5px blue;
`;

export const ButtonMXH = styled.div`
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 5px black;
  background-color: white;
  svg {
    color: ${(props) => props.color};
    height: 30px;
    width: 30px;
  }
`;
