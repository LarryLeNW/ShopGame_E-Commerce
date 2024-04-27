import styled, { css } from "styled-components";
import BGMAIN from "../../Images/background.jpg";

export const UserLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: url(${BGMAIN});
    background-size: cover;
    background-position: center;
`;

export const MainWrapper = styled.div`
    flex: 1;
    margin-top: 10vh;
`;
