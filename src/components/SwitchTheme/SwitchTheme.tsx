import { useEffect } from "react";
import { setTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { StyledSwitchTheme, StyledText, SwitchThemeButton } from "./styles";

export const SwitchTheme = () => {
  const { currentTheme } = useAppSelector(setTheme);
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledSwitchTheme>
      {currentTheme === "light" ? (
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
