import styled from "styled-components";
import { B2, Color } from "ui";

const StyledChapters = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const ButtonNews = styled.button`
  ${B2}
  padding: 20px 40px;
  color: ${Color.SECONDARY_TEXT};
  margin-right: 20px;
  border: none;
  /* border-radius: 7px; */
  border-bottom: 2px solid ${Color.SECONDARY_TEXT};
  :hover {
    color: ${Color.PRIMARY};
    transition-duration: 0.5s;
  }
`;
const ButtonArticles = styled(ButtonNews)``;
export { StyledChapters, ButtonArticles, ButtonNews };
