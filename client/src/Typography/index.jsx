import styled, { css } from "styled-components";

export const ButtonAnimation = styled.button`
  padding: 0.6em 2em;
  ${(props) =>
    css`
      font-size: ${props.size};
    `}
  font-weight: bold;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 70px;
    height: 40px;
    font-size: 10px;
    padding: 0.4em 1.6em;
  }
`;
export const ButtonNav = styled.button`
  height: 30px;
  width: 100px;
  background-color: #031f3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003d80;
    transform: scale(0.95);
  }
  a {
    color: whitesmoke;
    font-size: 16px;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 30px;
  }

  animation: lightItUp 5s infinite;

  @keyframes lightItUp {
    0% {
      ${(props) => css`
        box-shadow: 0 0 5px ${props.theme.color};
      `};
    }
    100% {
      ${(props) => css`
        box-shadow: 0 0 20px ${props.theme.color};
      `};
    }
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #0056b3;
    `}
`;

export const ButtonNavUser = styled.div`
  height: 50%;
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  ${(props) =>
    css`
      background-color: ${props.bg};
      border: 1px solid ${props.theme.color};
    `};
`;
