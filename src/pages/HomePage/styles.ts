import styled from "styled-components";
import { B1, B2, Color, Media, S1 } from "ui";

const WrapperHomePage = styled.div`
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
`;

const PrevPageButton = styled.button`
  ${S1}
  background: ${Color.LIGHT_CARDS};
  border: none;
  border-radius: 4px;
  color: ${Color.SECONDARY_TEXT};
  cursor: pointer;
  padding: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  :hover {
    background: ${Color.WHITE};
    :active {
      background: ${Color.PRIMARY_LIGHT};
    }
  }
`;

const NextPageButton = styled(PrevPageButton)``;

export { WrapperHomePage, SortBlock, TabsBlock, PaginationBlok, PrevPageButton, NextPageButton };
