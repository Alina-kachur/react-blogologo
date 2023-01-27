import { StyledButton } from "./styles";
import { memo } from "react";
import { BurgerIcon, CloseIcon } from "assets/icons";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const Burger = memo(({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
  return (
    <StyledButton onClick={toggleMenu}>{isMenuOpen ? <CloseIcon /> : <BurgerIcon />}</StyledButton>
  );
});
