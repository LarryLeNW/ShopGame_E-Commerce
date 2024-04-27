import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #df82d6;
    height: 90vh;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const WrapperCard = styled.div`
    width: 20%;
    @media screen and (max-width: 768px) {
        overflow-x: scroll;
        width: 45%;
        margin: 2px;
    }
`;
