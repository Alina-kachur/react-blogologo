import { ArticlesList, Chapters } from "components";
import { Title } from "components/Title/Title";
import { WrapperHomePage } from "./styles";

export const HomePage = () => {
  return (
    <WrapperHomePage>
      <Title>Blog</Title>
      <Chapters />
      <ArticlesList />
    </WrapperHomePage>
  );
};
