import { useEffect, useState } from "react";
import { StyledFooter } from "./styles";

export const Footer = () => {
  const [theme, setTheme] = useState("light");
  // литералы типов дженерик
  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <StyledFooter>
      <button onClick={handleTheme}>dark</button>
    </StyledFooter>
  );
};
