import { IArticleAPI } from "types";
import { IArticle } from "types/types";

export const transformArticles = (articles: IArticleAPI[]): IArticle[] => {
  return articles.map((article) => ({
    id: article.id,
    title: article.title,
    imageUrl: article.imageUrl,
    publishedAt: article.publishedAt,
  }));
};
