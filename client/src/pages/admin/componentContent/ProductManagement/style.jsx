import styled from "styled-components";

export const WrapperManager = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TableContainer = styled.div`
  height: 400px;
  overflow: scroll;
  thead {
    width: 100%;
  }
`;

export const WrapperControl = styled.div`
  height: 150px;
  width: 100%;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
`;

export const ContainerControl = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
`;
