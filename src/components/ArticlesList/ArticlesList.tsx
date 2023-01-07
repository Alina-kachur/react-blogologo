import { ArticlesListItem } from "components/ArticlesListItem/ArticlesListItem";
import { useAppDispatch, useAppSelector } from "store";
import { getAllArticles } from "store/selectors/articleSelector";
import { StyledArticlesList } from "./styles";
import { useEffect } from "react";
import { fetchArticles } from "store/slices/articlesSlice/articlesSlice";

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);

  useEffect(() => {
    dispatch(fetchArticles(12));
  }, [dispatch]);

  return (
    <StyledArticlesList>
      {articles.map((article) => (
        <ArticlesListItem article={article} key={article.id} />
      ))}
    </StyledArticlesList>
  );
};
