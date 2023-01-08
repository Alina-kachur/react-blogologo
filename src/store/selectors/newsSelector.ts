import { RootState } from "store/store";

export const getAllNews = (state: RootState) => state.news;
export const getNewsByID = (state: RootState) => state.newsInfo;
