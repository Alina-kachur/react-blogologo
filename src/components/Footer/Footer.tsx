import { SwitchTheme } from "components/SwitchTheme/SwitchTheme";
import { CopyRight, StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <CopyRight>©2022 Blogologo</CopyRight>
      <SwitchTheme />
    </StyledFooter>
  );
};
