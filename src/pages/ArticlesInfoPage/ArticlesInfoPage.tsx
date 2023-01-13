import { ArticleInfo, Spinner } from "components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleById, useAppSelector } from "store";
import { WrapperArticles } from "./styles";

export const ArticlesInfoPage = () => {
  const params = useParams();
  const { articles, isLoading } = useAppSelector(getArticleById);

  return (
    <WrapperArticles>
      {isLoading && <Spinner />}
      <ArticleInfo articles={articles} />
    </WrapperArticles>
  );
};
