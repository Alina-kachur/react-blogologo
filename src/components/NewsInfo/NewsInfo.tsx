import { Info, Title, Image } from "components/ArticleInfo/styles";
import { INewAPI } from "types";
import { StyledNewsInfo } from "./styles";

interface IProps {
  news: INewAPI;
}

export const NewsInfo = ({ news }: IProps) => {
  return (
    <StyledNewsInfo>
      <Title>{news.title}</Title>
      <Image src={news.imageUrl} />
      <Info>{news.summary}</Info>
    </StyledNewsInfo>
  );
};
