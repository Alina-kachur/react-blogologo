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
  border-left: 1px solid ${Color.LIGHT};
  ${Media.SM} {
    border: none;
  }
`;

const Text = styled.p`
  ${S1}
  font-weight: 600;
  color: ${Color.PRIMARY};
  ${Media.SM} {
    font-size: 18px;
  }
`;

export { StyledUserAccount, StyledLink, Text };
