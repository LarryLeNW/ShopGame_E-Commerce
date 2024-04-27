import styled, { css } from "styled-components";
import IconCursor from "../../../Images/cursor.png";

export const WrapperCategory = styled.div`
    text-align: center;
    border-radius: 5px;
    width: 300px;
    height: 350px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    color: white;
    margin: 10px;
    &:hover {
        padding: 0;
        ${(props) => css`
            border-radius: 0;
            box-shadow: 0 0 25px ${props.theme.color};
            ${ContainerImage} {
                padding: 0;
            }
        `};
    }
    transition: 0.8s;
`;

export const ContainerImage = styled.div`
    padding: 10px;
    height: 50%;
    width: 100%;
    transition: 0.8s;
`;

export const ImageCategory = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid red;
    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const TitleCategory = styled.div`
    margin-top: 10px;
    font-weight: bold;
    font-size: 24px;
`;

export const DescriptionCategory = styled.div`
    margin: 20px 0;
    font-size: 16px;
    text-shadow: 0 0 5px red;
`;

export const ButtonAnimation = styled.button`
    padding: 5px;
    box-shadow: 0 0 15px aqua;
    border-radius: 5px;
    a {
        font-weight: bold;
        color: black;
    }
    &:hover {
        a {
            cursor: url(${IconCursor}), auto;
        }
        animation: identifier 0.5s forwards;
    }
    @keyframes identifier {
        0% {
            transform: scale(1.05);
            box-shadow: 0 0 5px red;
        }
        25% {
            transform: scale(1.1);
            box-shadow: 0 0 10px red;
        }
        50% {
            transform: scale(1.15);
            box-shadow: 0 0 15px red;
        }
        75% {
            transform: scale(1.2);
            box-shadow: 0 0 20px red;
        }
        100% {
            transform: scale(1.25);
            box-shadow: 0 0 25px red;
        }
    }
`;
