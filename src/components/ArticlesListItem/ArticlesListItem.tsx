import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { IArticleAPI } from "types";
import { Image, Info, PublishedDate, StyledArticlesListItem } from "./styles";

interface IProps {
  articles: IArticleAPI;
}

export const ArticlesListItem = ({ articles }: IProps) => {
  const date = new Date(articles.publishedAt).toLocaleString().slice(0, -3);
  return (
    <StyledArticlesListItem>
      <Link to={generatePath(ROUTE.ARTICLES_INFO, { id: `${articles.id}` })}>
        <Image src={articles.imageUrl} />
        <PublishedDate>{date}</PublishedDate>
        <Info>{articles.title}</Info>
      </Link>
    </StyledArticlesListItem>
  );
};
