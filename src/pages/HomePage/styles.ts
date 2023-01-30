import { motion } from "framer-motion";
import styled from "styled-components";
import { B1, B2, Color, Media, S1 } from "ui";

const WrapperHomePage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${Media.SM} {
    align-items: center;
  }
`;

const SortBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  ${Media.SM} {
    flex-direction: column;
    gap: 20px;
  }
`;
const TabsBlock = styled.div`
  display: flex;
`;

const PaginationBlok = styled.div`
  display: flex;
  justify-content: space-between;
  ${Media.SM} {
    width: 100%;
  }
`;

const PrevPageButton = styled.button`
  padding: 10px 15px;
  ${B2}
  border: none;
  color: ${Color.SECONDARY_TEXT};
  cursor: pointer;

  :hover {
    color: ${Color.PRIMARY_LIGHT};
  }
`;

const NextPageButton = styled(PrevPageButton)``;

export { WrapperHomePage, SortBlock, TabsBlock, PaginationBlok, PrevPageButton, NextPageButton };
