import { Search } from "components/Search/Search";
import { UserAccount } from "components/UserAccount/UserAccount";
import React from "react";
import { StyledHeaderMenu } from "./styles";

interface MenuProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  idle: {},
};

export const HeaderMenu = ({ isOpen, isMobile, handleClose }: MenuProps) => {
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";

  return (
    <StyledHeaderMenu animate={currentVariant} variants={menuVariants} initial="idle">
      <Search placeholder="Search ..." type={"text"} />

      <UserAccount handleClose={handleClose} />
    </StyledHeaderMenu>
  );
};
