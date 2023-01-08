import { RootState } from "store/store";

export const getAllArticles = (state: RootState) => state.articles;
export const getArticlesByID = (state: RootState) => state.articlesInfo;
