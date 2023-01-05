import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceNewsAPI } from "services";
import { IArticleAPI } from "types";

interface IArticleState {
  articles: IArticleAPI[];
  isLoading: boolean;
  error: null | string;
}

export const fetchArticles = createAsyncThunk<IArticleAPI[], number, { rejectValue: string }>(
  "articles/fetchArticles",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceNewsAPI.getAllArticles(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);
const initialState: IArticleState = {
  articles: [],
  isLoading: false,
  error: null,
};
const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});
export default articleSlice.reducer;
