import { ArticlesListItem } from "components/ArticlesListItem/ArticlesListItem";
import { useAppDispatch, useAppSelector } from "store";
import { getAllArticles } from "store/selectors/articleSelector";
import { IArticle } from "types/types";
import { StyledArticlesList } from "./styles";
import { useEffect } from "react";
import { fetchArticles } from "store/slices/articlesSlice/articlesSlice";

// interface IProps {
//   articles: IArticle[];
// }

export const ArticlesList = () => {
  const dispatch = useAppDispatch();
  const { articles, error, isLoading } = useAppSelector(getAllArticles);

  useEffect(() => {
    dispatch(fetchArticles(10));
  }, [dispatch]);

  return (
    <StyledArticlesList>
      {articles.map((article) => (
        <ArticlesListItem article={article} key={article.id} />
      ))}
    </StyledArticlesList>
  );
};
