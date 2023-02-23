import React from "react";
import Header from "../components/header/header";
import Timeline from "../components/timeline/timeline";
import { Main } from "./styledIndex";

export default function index({ isDark, setIsDark }) {
  return (
    <Main>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Timeline />
    </Main>
  );
}
