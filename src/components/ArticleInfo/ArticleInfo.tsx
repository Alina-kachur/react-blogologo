import { useNavigate } from "react-router-dom";
import { IArticleAPI } from "types";
import { Home, Image, Info, Navigate, Post, StyledArticleInfo, Title } from "./styles";

interface IProps {
  articles: IArticleAPI;
}

export const ArticleInfo = ({ articles }: IProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const { title, imageUrl, url, summary, id } = articles;
  return (
    <>
      <Navigate>
        <Home onClick={handleBack}>Home /</Home>
        <Post>{id} Post</Post>
      </Navigate>
      <StyledArticleInfo>
        <Title>{title}</Title>
        <Image src={imageUrl} />
        <Info>{summary}</Info>
      </StyledArticleInfo>
    </>
  );
};
