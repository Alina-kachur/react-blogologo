import { StyledHeader, StyledLink, StyledLogoIcon } from "./styles";
import { ROUTE } from "router";
import { useInput, useToggle, useWindowSize } from "hooks";
import { Search } from "components/Search/Search";
import { UserAccount } from "components/UserAccount/UserAccount";
import { Burger } from "components/Burger/Burger";
import { HeaderMenu } from "components/HeaderMenu/HeaderMenu";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width <= 568;

  return (
    <StyledHeader>
      <StyledLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </StyledLink>
      <HeaderMenu isOpen={isMenuOpen} isMobile={isMobile} handleClose={toggleMenu} />
      {isMobile && <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
    </StyledHeader>
  );
};
