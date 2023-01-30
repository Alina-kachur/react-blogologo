import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { B1, B2, Color, Media, S1 } from "ui";

const StyledBlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Image = styled.img`
  height: 520px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  ${Media.MD} {
    width: 700px;
  }

  ${Media.SM} {
    width: 500px;
  }
  ${Media.XS} {
    width: 100%;
    height: 300px;
  }
  ${Media.XXS} {
    width: 290px;
  }
`;

const Info = styled.p`
  padding: 0 40px;
  ${S1}
  color: ${Color.SECONDARY_TEXT};
`;
const Navigate = styled.div`
  display: flex;
  padding-top: 30px;
`;
const Home = styled.button`
  ${S1}
  color: ${Color.SECONDARY_TEXT};
  border: none;
`;
const Post = styled.p`
  ${S1}
  color: ${Color.MEDIUM_TEXT};
`;
const SourceBlock = styled.div`
  display: flex;
  gap: 20px;
`;
const SourceLink = styled.a`
  display: inline-block;

  padding: 15px;
  background-color: ${Color.GRAY};
  border-radius: 10px;
  ${B2}
  color: ${Color.SECONDARY_TEXT};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  :hover {
    box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.7);
    transition-duration: 0.5s;
  }
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
const Favorites = styled.button`
  display: inline-block;
  padding: 15px;
  background-color: ${Color.GRAY};
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: none;
  :hover {
    box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.7);
    transition-duration: 0.5s;
  }
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export { StyledBlogInfo, Info, Navigate, Home, Post, Image, SourceBlock, SourceLink, Favorites };
