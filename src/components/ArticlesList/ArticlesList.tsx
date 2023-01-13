import { ArticlesListItem } from "components/ArticlesListItem/ArticlesListItem";
import { useAppDispatch, useAppSelector } from "store";
import { getAllArticles } from "store/selectors/articleSelector";
import { StyledArticlesList } from "./styles";
import { useEffect } from "react";
import { fetchArticles } from "store/slices/articlesSlice/articlesSlice";
import { Spinner } from "components/Spinner/Spinner";

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);

  useEffect(() => {
    dispatch(fetchArticles(12));
  }, [dispatch]);

  return (
    <StyledArticlesList>
      {isLoading && <Spinner />}
      {articles.map((article) => (
        <ArticlesListItem articles={article} key={article.id} />
      ))}
    </StyledArticlesList>
  );
};
