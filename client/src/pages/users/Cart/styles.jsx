import styled from "styled-components";

export const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

export const CartListWrapper = styled.div`
    margin: 0 auto;
    padding: 24px;
    width: 100%;
    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`;

export const ContainerControl = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    color: white;
    width: 10rem;
    margin: 5px;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    &:hover {
        opacity: 0.9;
    }
    @media screen and (max-width: 768px) {
        padding: 0px;
        width: 4rem;
    }
`;
