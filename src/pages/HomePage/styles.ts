import styled from "styled-components";
import { Media } from "ui";

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
  ${Media.SM} {
    flex-direction: column;
    gap: 20px;
  }
`;

export { WrapperHomePage, SortBlock };
