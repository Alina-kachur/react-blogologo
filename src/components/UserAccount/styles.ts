import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, S1 } from "ui";
import { motion } from "framer-motion";

const StyledUserAccount = styled(motion.div)``;
const StyledLink = styled(NavLink)`
  display: flex;
  gap: 7px;
  align-items: center;
  padding-left: 20px;
  height: 100%;

  ${Media.SM} {
    border: none;
    padding: 0;
  }
`;

const Text = styled.p`
  ${S1}
  font-weight: 600;
  color: ${Color.PRIMARY_LIGHT};
  text-align: center;
  ${Media.SM} {
    font-size: 18px;
    padding-right: 30px;
  }
  :hover {
    color: ${Color.PRIMARY};
    transition-duration: 0.5s;
  }
`;
const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #98989b;
  padding-left: 20px;
  ${Media.SM} {
    border: none;
    flex-direction: column;
    gap: 20px;
  }
`;
const StyledLinkFav = styled(NavLink)``;

export { StyledUserAccount, StyledLink, Text, WrapperLink, StyledLinkFav };
