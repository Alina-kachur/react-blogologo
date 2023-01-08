import { IArticleAPI } from "types";
import { Image, Info, StyledArticleInfo, Title } from "./styles";

interface IProps {
  article: IArticleAPI;
}

export const ArticleInfo = ({ article }: IProps) => {
  return (
    <StyledArticleInfo>
      <Title>{article.title}</Title>
      <Image src={article.imageUrl} />
      <Info>{article.summary}</Info>
    </StyledArticleInfo>
  );
};
