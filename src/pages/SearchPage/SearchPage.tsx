import { BlogList, Spinner, Title } from "components";
import { useEffect } from "react";
import { fetchArticles, fetchNews, getBlog, useAppDispatch, useAppSelector } from "store";
import { WrapperSearchPage } from "./styles";

export const SearchPage = () => {
  const {
    search: { titleWord },
  } = useAppSelector(getBlog);
  const dispatch = useAppDispatch();
  const { articles, news, error, isLoading } = useAppSelector(getBlog);

  useEffect(() => {
    titleWord &&
      dispatch(
        fetchArticles({
          page: 0,
          titleWord: titleWord,
          value: "",
        }),
      );
  }, [dispatch, titleWord]);

  useEffect(() => {
    titleWord &&
      dispatch(
        fetchNews({
          page: 0,
          titleWord: titleWord,
          value: "",
        }),
      );
  }, [dispatch, titleWord]);
  return (
    <WrapperSearchPage
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Title>Search results Articles: "{titleWord ? titleWord : ""}"</Title>
      {isLoading ? <Spinner /> : <BlogList list={articles} />}
      <Title>Search results News: "{titleWord ? titleWord : ""}"</Title>
      {isLoading ? <Spinner /> : <BlogList list={news} />}
    </WrapperSearchPage>
  );
};
