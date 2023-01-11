import { NewsListItem } from "components/NewsListItem/NewsListItem";
import { useAppDispatch, useAppSelector } from "store";
import { getAllNews } from "store/selectors/newsSelector";
import { fetchNews } from "store/slices/newsSlice/newsSlice";
import { StyledNewsList } from "./styles";
import { useEffect } from "react";
import { Spinner } from "components/Spinner/Spinner";

export const NewsList = () => {
  const dispatch = useAppDispatch();
  const { news, error, isLoading } = useAppSelector(getAllNews);

  useEffect(() => {
    dispatch(fetchNews(12));
  }, [dispatch]);

  return (
    <StyledNewsList>
      {isLoading && <Spinner />}
      {news.map((news) => (
        <NewsListItem news={news} key={news.id} />
      ))}
    </StyledNewsList>
  );
};
