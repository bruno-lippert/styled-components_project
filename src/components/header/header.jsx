import React from "react";
import Navbar from "./navbar/navbar";
import Logo from "./logoOneBitCode/logo";
import { StyledHeader } from "./styledHeader";

export default function header({ isDark, setIsDark }) {
  return (
    <StyledHeader>
      <Logo />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
    </StyledHeader>
  );
}
