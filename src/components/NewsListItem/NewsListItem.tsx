import { Image, Info, PublishedDate } from "components/ArticlesListItem/styles";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { INewAPI } from "types";
import { StyledNewsListItem } from "./styles";

interface IProps {
  news: INewAPI;
}

export const NewsListItem = ({ news }: IProps) => {
  const date = new Date(news.publishedAt).toLocaleString().slice(0, -3);
  return (
    <StyledNewsListItem>
      <Link to={generatePath(ROUTE.NEWS_INFO, { id: `${news.id}` })}>
        <Image src={news.imageUrl} />
        <PublishedDate>{date}</PublishedDate>
        <Info>{news.title}</Info>
      </Link>
    </StyledNewsListItem>
  );
};
