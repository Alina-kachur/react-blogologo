import { Image, Info, PublishedDate } from "components/ArticlesListItem/styles";
import { INewAPI } from "types";
import { StyledNewsListItem } from "./styles";

interface IProps {
  news: INewAPI;
}

export const NewsListItem = ({ news }: IProps) => {
  const date = new Date(news.publishedAt).toLocaleString().slice(0, -3);
  return (
    <StyledNewsListItem>
      <Image src={news.imageUrl} />
      <PublishedDate>{date}</PublishedDate>
      <Info>{news.title}</Info>
    </StyledNewsListItem>
  );
};
