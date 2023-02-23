import logoDark from "./images/logoDark.png";
import logoLight from "./images/logoLight.png";
import iconDark from "./images/sun.png"
import iconLight from "./images/moon.png"

export const darkTheme = {
  colors: {
    background: "#1C1C1C",
    text: "#FFFFFF",
    textButton: "#000000",
    backgroundButton: "#FFFFFF",
  },
  images: {
    logo: logoDark,
    icon: iconDark
  },
};

export const lightTheme = {
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    textButton: "#FFFFFF",
    backgroundButton: "#000000",
    
  },
  images: {
    logo: logoLight,
    icon: iconLight
  },
};
