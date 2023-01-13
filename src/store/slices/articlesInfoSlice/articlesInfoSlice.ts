import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceNewsAPI } from "services";
import { IArticleAPI } from "types";

interface IArticlesInfoState {
  articles: IArticleAPI;
  isLoading: boolean;
  error: null | string;
}

export const fetchArticlesInfo = createAsyncThunk<IArticleAPI, string, { rejectValue: string }>(
  "articles/fetchArticlesInfo",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceNewsAPI.getArticlesById(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IArticlesInfoState = {
  articles: {} as IArticleAPI,
  isLoading: false,
  error: null,
};

export const articlesInfoSlice = createSlice({
  name: "articlesInfo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticlesInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticlesInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticlesInfo.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesInfoSlice.reducer;
