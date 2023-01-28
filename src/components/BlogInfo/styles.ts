import styled from "styled-components";
import { Color, Media, S1 } from "ui";

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
  padding: 15px;
  width: 120px;
  background-color: ${Color.PRIMARY};
  border-radius: 10px;
`;
const SourceLink = styled.a`
  ${S1}
  color: ${Color.WHITE};
`;

export { StyledBlogInfo, Info, Navigate, Home, Post, Image, SourceBlock, SourceLink };
