import styled from "styled-components";
import { B2, Color } from "ui";
import { setTab } from "./Tabs";

const StyledTabs = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const ButtonNews = styled.button<setTab>`
  ${B2}
  padding: 20px 40px;
  color: ${({ active }) => (active === false ? Color.SECONDARY_TEXT : Color.WHITE)};
  margin-right: 20px;
  border: none;
  border-radius: 16px;
  background: ${({ active }) => (active === false ? Color.LIGHT_CARDS : Color.PRIMARY)};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  :hover {
    box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.7);
    transition-duration: 0.5s;
  }
`;
const ButtonArticles = styled(ButtonNews)<setTab>`
  color: ${({ active }) => (active === true ? Color.SECONDARY_TEXT : Color.WHITE)};
  background: ${({ active }) => (active === true ? Color.LIGHT_CARDS : Color.PRIMARY)};
`;
export { StyledTabs, ButtonArticles, ButtonNews };
