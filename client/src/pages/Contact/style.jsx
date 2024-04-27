import styled, { css } from "styled-components";

export let Wrapper = styled.div`
    background-color: #a7bcff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export let Container = styled.div`
    border: 1px solid white;
    border-radius: 10px;
    width: 80%;
    height: 600px;
    display: flex;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        height: 500px;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;
