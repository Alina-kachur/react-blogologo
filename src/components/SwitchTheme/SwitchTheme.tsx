import { useEffect, useState } from "react";
import { StyledSwitchTheme, StyledText, SwitchThemeButton } from "./styles";

type Theme = "light" | "dark";

export const SwitchTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <StyledSwitchTheme>
      {theme === "light" ? (
        <StyledText>Dark theme</StyledText>
      ) : (
        <StyledText>Light theme</StyledText>
      )}
      <SwitchThemeButton>
        <input type="checkbox" onClick={handleTheme} />
        <span></span>
      </SwitchThemeButton>
    </StyledSwitchTheme>
  );
};
