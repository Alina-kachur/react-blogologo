import styled from "styled-components";
import { B2, Color, Media, S1 } from "ui";

const StyledBlogListItem = styled.li`
  width: 353px;
  height: 390px;
  background-color: ${Color.WHITE_HEADER};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  opacity: 0.8;
  :hover {
    box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.7);
    transition: 0.5s;
    opacity: 1;
  }
  ${Media.MD} {
    width: 320px;
  }
  ${Media.XXS} {
    width: 272px;
  }
`;

const Image = styled.img`
  display: block;
  margin-bottom: 15px;
  height: 250px;
  width: 100%;
  object-fit: cover;
`;
const PublishedDate = styled.span`
  padding: 0 20px;
  ${S1}
  color: ${Color.MEDIUM_TEXT};
`;
const Info = styled.p`
  padding: 10px 20px;
  ${B2}
  color: ${Color.SECONDARY_TEXT};
`;

export { StyledBlogListItem, Image, PublishedDate, Info };
