import { Spinner, Title } from "components";
import { BlogList } from "components/BlogList/BlogList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { spaceNewsAPI } from "services";
import { fetchArticles, fetchNews, useAppDispatch, useAppSelector } from "store";
import { getBlog } from "store/selectors/blogSelector";
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
    <WrapperSearchPage>
      <Title>Search results Articles: "{titleWord ? titleWord : ""}"</Title>
      {isLoading ? <Spinner /> : <BlogList list={articles} />}
      <Title>Search results News: "{titleWord ? titleWord : ""}"</Title>
      {isLoading ? <Spinner /> : <BlogList list={news} />}
    </WrapperSearchPage>
  );
};
