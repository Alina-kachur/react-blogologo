import styled from "styled-components";
import { B2, Color } from "ui";
import { setDate } from "./SortByDate";

const WrapperSort = styled.div``;

const SortButton = styled.button<setDate>`
  ${B2}
  padding: 20px 40px;
  color: ${({ active }) => (active === false ? Color.SECONDARY_TEXT : Color.WHITE)};
  background: ${({ active }) => (active === false ? Color.LIGHT_CARDS : Color.PRIMARY)};
  cursor: pointer;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
  :hover {
    box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.7);
    transition-duration: 0.5s;
  }
`;

export { WrapperSort, SortButton };
