import { IArticleAPI } from "types";
import { Image, Info, PublishedDate, StyledArticlesListItem } from "./styles";

interface IProps {
  article: IArticleAPI;
}

export const ArticlesListItem = ({ article }: IProps) => {
  return (
    <StyledArticlesListItem>
      <Image src={article.imageUrl} />
      <PublishedDate>{article.publishedAt}</PublishedDate>
      <Info>{article.title}</Info>
    </StyledArticlesListItem>
  );
};
