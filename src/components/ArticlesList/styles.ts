import styled from "styled-components";
import { Media } from "ui";

const StyledArticlesList = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, 350px); */
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  /* justify-content: space-between; */
  gap: 40px;
  padding-left: 0;
  ${Media.MD} {
    grid-template-columns: repeat(auto-fill, 320px);
  }
  ${Media.XXS} {
    grid-template-columns: repeat(auto-fill, 272px);
  }
`;

export { StyledArticlesList };
