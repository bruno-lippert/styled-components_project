import styled from "styled-components";

export const StyledTimeline = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  flex-wrap: wrap;

  * {
    box-sizing: border-box;
  }

  .productImage {
    width: 400px;
    pointer-events: none; //bloqueia a interação com a imagem
  }

  .prductDescription {
    width: 500px;
    > h2 {
      margin-top: 0;
    }
  }

  .shopButton {
    background-color: ${(props) => props.theme.colors.backgroundButton};
    width: 150px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    :hover {
      font-size: 17.5px;
    }
    > h4 {
      color: ${(props) => props.theme.colors.textButton};
      padding: 5px 0 5px 0;
      margin-bottom: 0px;
    }
  }

  @media (max-width: 899px) {
    .prductDescription {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 40px;
    }
    .shopButton {
      > h4 {
        margin: 0;
      }
    }

    p {
      padding: 0 30px;
    }
  }
  @media (max-width: 430px) {
    padding-top: 20px;

    .productImage {
    width: 100%;
    pointer-events: none; //bloqueia a interação com a imagem
  }
  }
`;
