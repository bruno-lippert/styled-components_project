import styled from "styled-components";

export const StyledNavbvar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-right: 20px;
  gap: 10px;

  .moonImg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  a {
    text-decoration: none;

    &:visited {
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media (max-width: 430px) {
      display: flex;
      flex-direction: column;
    
  }
`;

export const IconImg = styled.img.attrs((props) => ({
  src: props.theme.images.icon,
  alt: "icon Image",
}))``;
