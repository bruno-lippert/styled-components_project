import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
