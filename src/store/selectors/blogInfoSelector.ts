import { RootState } from "store/store";

export const getArticlesById = (state: RootState) => state.blogInfo;
