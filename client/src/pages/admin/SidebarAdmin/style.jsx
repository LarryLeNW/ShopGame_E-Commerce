import styled, { css } from "styled-components";

export const WrapperSidebar = styled.div`
    height: 90%;
    width: 30%;
    background-color: gray;
    border: 5px solid white;
    position: absolute;
    transition: 0.5s;
    z-index: 99;
    left: -30%;
    @media screen and (max-width: 768px) {
        width: 60%;
        left: -60%;
    }
    ${(props) =>
        props.active &&
        css`
            left: 0;
            @media screen and (max-width: 768px) {
                left: 0;
            }
        `}
`;

export const ItemNav = styled.div`
    height: 50px;
    width: 100%;
    background-color: ${(props) => props.bg};
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid white;
    text-align: center;
    color: white;
    line-height: 50px;
`;

export const MenuChild = styled.div`
    display: none;
    opacity: 0;
    ${(props) =>
        props.isShowMenuProduct &&
        css`
            display: block;
            opacity: 1;
        `}
`;
