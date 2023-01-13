import { ArticlesList, Chapters, NewsList } from "components";
import { Title } from "components/Title/Title";
import { useState } from "react";
import { useAppDispatch } from "store";
import { WrapperHomePage } from "./styles";

export const HomePage = () => {
  // const [params, setParams] = useState({
  //   sortMode: "asc",
  //   currentPage: 1,
  //   activeTab: "articles",
  //   endpoints: ["articles, blogs"],
  // });
  const [tab, setTab] = useState<string>("articles");
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  return (
    <WrapperHomePage>
      <Title>Blog</Title>
      <Chapters setTab={setTab} tab={tab} />
      {tab === "articles" ? <ArticlesList /> : <NewsList />}
    </WrapperHomePage>
  );
};
