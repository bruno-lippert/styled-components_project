import React from "react";
import { IconImg, StyledNavbvar } from "./styledNavbar";
import sun from "../../../images/sun.png";
import moon from "../../../images/moon.png";

export default function navbar({ isDark, setIsDark }) {
  function changeTheme() {
    setIsDark(!isDark);
  }

  return (
    <StyledNavbvar>
      <IconImg className="moonImg" onClick={changeTheme} />
      <nav>
        <a href="">Início</a>
      </nav>
      <nav>
        <a href="">Contato</a>
      </nav>
      <nav>
        <a href="">Sobre nós</a>
      </nav>
    </StyledNavbvar>
  );
}
