import styled from "styled-components";

export const StyledLogo = styled.div`
  padding: 10px 20px;

  @media (max-width: 800px) {

    .imgLogo {
      width: 80%;
    }
    
}
@media (max-width: 660px) {
  display:flex;
  justify-content: center;
  .imgLogo {
      width: 80%;
    }
}
`;

export const ImgLogo = styled.img.attrs((props) => ({
  src: props.theme.images.logo,
  alt: "imagelogo",
}))`


`;
