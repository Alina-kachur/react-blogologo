import styled from "styled-components";
import { Media } from "ui";
import { motion } from "framer-motion";

const StyledHeaderMenu = styled(motion.nav)`
  display: flex;
  gap: 2rem;
  align-items: center;
  ${Media.SM} {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 10;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100vw;
    height: calc(100vh - 100px);
    background-color: inherit;
    opacity: 0;
    transform: translateX(-100%);
  }
`;
export { StyledHeaderMenu };
