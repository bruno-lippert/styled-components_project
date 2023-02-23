import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import "./App.css";
import Index from "./pages";
import { useState } from "react";
import teste from "../src/images/logoDark.png"

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const theme = isDark === true ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme} className="App">
      <Index isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
}
