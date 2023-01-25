import styled from "styled-components";
import { Media } from "ui";

const StyledBlogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 40px;
  padding-left: 0;
  ${Media.MD} {
    grid-template-columns: repeat(auto-fill, 320px);
  }
  ${Media.XXS} {
    grid-template-columns: repeat(auto-fill, 272px);
  }
`;
export { StyledBlogList };
