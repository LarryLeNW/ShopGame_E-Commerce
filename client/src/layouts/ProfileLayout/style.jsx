import styled, { css } from "styled-components";

export const WrapperProfileLayout = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    padding: 20px 40px;
    margin: 0 auto;
    min-height: 90vh;
    label {
        color: ${(props) => props.theme.color} !important;
    }
    a {
        text-decoration: none;
    }
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`;

export const MenubarProfile = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const ItemMenu = styled.div`
    a {
        font-weight: bold;
        font-size: 20px;
        color: white;
        ${(props) =>
            props.active &&
            css`
                color: #0f12cc;
                text-decoration: underline;
            `}
    }
    @media screen and (max-width: 768px) {
        a {
            font-size: 10px;
        }
    }
`;
