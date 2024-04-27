import styled, { css } from "styled-components";
import BGMAIN from "../../../Images/Main.jpg";
export const ProductListWrapper = styled.div`
    width: 100%;
    background-size: cover;
    padding: 16px;
`;

export const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    color: black;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: "100%";
    font-size: 1rem;
`;

export const Select = styled.select`
    background-color: black;
    color: white;
    margin: 0 16px;
    @media screen and (max-width: 768px) {
        margin: 0 4px;
    }
`;
