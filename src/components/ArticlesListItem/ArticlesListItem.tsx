import { IArticleAPI } from "types";
import { Image, Info, PublishedDate, StyledArticlesListItem } from "./styles";

interface IProps {
  article: IArticleAPI;
}

export const ArticlesListItem = ({ article }: IProps) => {
  const date = new Date(article.publishedAt).toLocaleString().slice(0, -3);
  return (
    <StyledArticlesListItem>
      <Image src={article.imageUrl} />
      <PublishedDate>{date}</PublishedDate>
      <Info>{article.title}</Info>
    </StyledArticlesListItem>
  );
};
