import styled, { css } from "styled-components";

export const ButtonNavUser = styled.div`
    height: 50%;
    width: 100%;

    ${(props) => {
        css`
            background-color: ${props.bg};
            border: 2px solid ${props.theme.color};
        `;
    }}
`;

export const TitleMain = styled.div`
    font-weight: bold;
    text-shadow: 2px 2px #fff;
    text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
    text-align: center;
    font-size: ${(props) => props.fs};
    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;
