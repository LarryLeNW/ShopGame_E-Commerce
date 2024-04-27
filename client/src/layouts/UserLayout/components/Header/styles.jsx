import styled, { css } from "styled-components";
import closeIcon from "../../../../Images/close.png";

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    z-index: 99;
    padding: 0 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    /* @media (max-width: 768px) {
        display: block;
    } */
`;

// input check showMenu
export const InputCheckMenuMain = styled.input`
    display: none;
`;

// icon menu main mobile
export const IconMenuMain = styled.label`
    color: white;
    display: none;
    width: 40px;
    max-height: 50px;
    @media (max-width: 768px) {
        display: none;
        ${(props) =>
            props.isShow &&
            css`
                display: block;
            `}
    }
`;

export const NavMain = styled.div`
    display: flex;
    @media (max-width: 768px) {
        position: absolute;
        top: 10vh;
        right: 0;
        left: -250px;
        bottom: 0;
        width: 50%;
        background-color: black;
        border-right: 2px solid white;
        flex-direction: column;
        height: 90vh;
        transition: 1.5s;
        ${(props) =>
            props.isShow &&
            css`
                left: 0px;
            `}
    }
`;

export const NavItemCenter = styled.div`
    height: 30px;
    width: 100px;
    font-size: 16px;
    a {
        text-decoration: none;
        font-size: 16px;
        display: block;
        width: 100%;
        height: 100%;
        color: whitesmoke;
        line-height: 30px;
    }
    &:hover {
        a {
            text-decoration: underline;
            font-weight: bold;
        }
    }
    ${(props) =>
        props.active &&
        css`
            font-weight: bold;
        `}
    @media (max-width: 768px) {
        a {
            font-size: 1.5rem;
            display: block;
            text-align: center;
            line-height: calc(17.7rem / 4);
        }
        border-bottom: 1px solid white;
        height: calc(17.7rem / 4);
        width: 100%;
    }
`;

export const HeaderIcon = styled.div`
    font-size: 20px;
    font-weight: bold;
    animation: shake 5s infinite;

    @keyframes shake {
        0%,
        100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        50% {
            transform: translateX(5px);
        }
        75% {
            transform: translateX(-5px);
        }
    }
    @media screen and (max-width: 768px) {
        font-size: 15px;
        margin-left: 10px;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.bg};
    width: 280px;
    height: 20px;
    padding: 20px;
    border-radius: 10px;
    input {
        outline: none;
        border: none;
        background-color: transparent;
        color: ${(props) => props.theme.bg};
    }
    @media screen and (max-width: 768px) {
        width: 200px;
        padding: 15px;
        margin-left: 10px;
    }
`;

export const InputSearch = styled.input`
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const ButtonSearch = styled.div`
    position: absolute;
    right: 0px;
    border-radius: 2px;
    height: 40px;
    width: 40px;
    transition: 1.2s;
    &:hover {
        background-color: gray;
    }
    img {
        object-fit: cover;
    }
    &::after {
        content: "";
        position: absolute;
        height: 100%;
        left: -10px;
        width: 1px;
        background-color: black;
    }
    @media screen and (max-width: 768px) {
        height: 25px;
        width: 25px;
    }
`;

export const IconLoading = styled.div`
    position: absolute;
    right: 0px;
    border-radius: 2px;
    height: 40px;
    width: 40px;
    img {
        object-fit: cover;
    }
    animation: spinner 1s infinite;
    @keyframes spinner {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @media screen and (max-width: 768px) {
        height: 25px;
        width: 25px;
    }
`;

export const WrapperResult = styled.div`
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.color};
    width: 280px;
    max-height: 350px;
    padding-top: 5px;
    padding: 0 5px;
    box-shadow: 0 0 5px black;
    border-radius: 5px;
    overflow-y: scroll;
`;

export const ResultItem = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
    height: 70px;
    margin-bottom: 5px;
    &:hover {
        background-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.bg};
        box-shadow: 0 0 5px ${(props) => props.theme.color};
    }
`;

export const ImageResult = styled.div`
    width: 100px;
    object-fit: cover;
    margin-right: 5px;
`;

export const TitleResult = styled.div`
    font-weight: bold;
    font-size: 18px;
`;

export const DesResult = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Info = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const MenuService = styled.div`
    border-radius: 5px;
    padding: 20px;
    display: none;
    left: 310px;
    top: 66px;
    position: absolute;
    width: 20%;
    height: 200px;
    ${(props) =>
        props.isShowService &&
        css`
            animation: display 0.8s forwards;
            display: block;
        `}
    ${(props) => css`
        background-color: ${props.theme.bg};
        color: ${props.theme.color};
        border: 5px solid ${props.theme.color === "white" ? "aqua" : "#960cf6"};
    `}

  @keyframes display {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const MenuUser = styled.div`
    border-radius: 5px;
    display: none;
    right: 0px;
    top: 56px;
    position: absolute;
    width: 10%;
    height: 100px;
    ${(props) =>
        props.isShowMenuUser &&
        css`
            animation: display 0.8s forwards;
            display: block;
        `}
    ${(props) => css`
        background-color: ${props.theme.bg};
        color: ${props.theme.color};
        border: 5px solid ${props.theme.color === "white" ? "aqua" : "#960cf6"};
    `}

  @keyframes display {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media screen and (max-width: 768px) {
        width: 30%;
        font-size: 20px;
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export const AvatarPreview = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    ${(props) => css`
        border: 2px solid ${props.theme.color};
        box-shadow: 0 0 5px ${props.theme.color};
    `}
`;

export const WrapperCart = styled.div`
    margin-right: 25px;
    line-height: 100%;
    @media screen and (max-width: 768px) {
        a {
            i {
                font-size: 20px !important;
            }
        }
    }
`;
