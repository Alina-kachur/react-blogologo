import styled from "styled-components";
import { Color, S1 } from "ui";

const StyledBlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Image = styled.img`
  height: 520px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const Info = styled.p`
  ${S1}
  padding: 0 40px;
  color: ${Color.SECONDARY_TEXT};
`;

const Navigate = styled.div`
  display: flex;
  padding-top: 30px;
`;
const Home = styled.button`
  ${S1}
  border: none;
  color: ${Color.SECONDARY_TEXT};
`;
const Post = styled.p`
  ${S1}
  color: ${Color.MEDIUM_TEXT};
`;

export { StyledBlogInfo, Info, Navigate, Home, Post, Image };
