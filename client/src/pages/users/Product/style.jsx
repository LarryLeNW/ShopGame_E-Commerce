import styled from "styled-components";
import IconCursor from "../../../Images/cursor.png";

export const WrapperProduct = styled.div`
    height: 350px;
    width: 300px;
    box-shadow: 0 0 5px red;
    padding: 10px;
    text-align: center;
    margin: 10px 5px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    color: white;
    img {
        width: 100%;
        height: 70%;
    }

    @media (max-width: 300px) {
        width: 100%;
    }
`;

export const TitleProduct = styled.div`
    font-weight: bold;
    font-size: 15px;
    text-shadow: 0 0 2px green;
`;

export const PriceProduct = styled.div`
    font-weight: bold;
    font-size: 15px;
    text-shadow: 0 0 2px blue;
`;

export const PriceReduce = styled.div`
    font-weight: bold;
    font-size: 15px;
    text-shadow: 0 0 2px red;
`;

export const ButtonProduct = styled.button`
    margin-top: 10px;
    color: white;
    width: 50%;
    border-radius: 5px;
    font-weight: bold;
    height: 30px;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    background-color: transparent;
    box-shadow: 0 0 5px red;
    &:hover {
        box-shadow: 0 0 25px red;
        cursor: url(${IconCursor}), auto;
    }
    transition: 1s all;
`;
