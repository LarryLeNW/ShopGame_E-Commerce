import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
    min-height: 100vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

export const HomeTitle = styled.h1`
    ${(props) => css`
        text-shadow: 0 0 5px ${props.theme.bg};
    `}
    text-align: center;
    font-weight: bold;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
`;

export const WrapperProductType = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
