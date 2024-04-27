import styled, { css } from "styled-components";

export const FooterWrapper = styled.div`
  padding: 20px;
  text-align: center;
  ${(props) => css`
    background-color: ${props.theme.bg};
    color: ${props.theme.color};
    box-shadow: 0 0 5px ${props.theme.color};
  `};
`;
