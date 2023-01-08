import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { IArticleAPI } from "types";
import { Image, Info, PublishedDate, StyledArticlesListItem } from "./styles";

interface IProps {
  article: IArticleAPI;
}

export const ArticlesListItem = ({ article }: IProps) => {
  const date = new Date(article.publishedAt).toLocaleString().slice(0, -3);
  return (
    <StyledArticlesListItem>
      <Link to={generatePath(ROUTE.ARTICLES_INFO, { id: `${article.id}` })}>
        <Image src={article.imageUrl} />
        <PublishedDate>{date}</PublishedDate>
        <Info>{article.title}</Info>
      </Link>
    </StyledArticlesListItem>
  );
};
