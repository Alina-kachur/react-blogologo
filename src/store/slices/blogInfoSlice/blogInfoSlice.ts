import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceNewsAPI } from "services";
import { IBlogAPI } from "types";

interface IArticlesState {
  article: IBlogAPI;
  news: IBlogAPI;
  isLoading: boolean;
  error: null | string;
}

const initialState: IArticlesState = {
  article: {} as IBlogAPI,
  news: {} as IBlogAPI,
  isLoading: false,
  error: null,
};

export const fetchArticleById = createAsyncThunk<IBlogAPI, string, { rejectValue: string }>(
  "articles/fetchArticles",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceNewsAPI.getArticlesById(params);
    } catch (error) {
      const errorMessage = error as AxiosError;
      return rejectWithValue(errorMessage.message);
    }
  },
);

export const fetchNewsById = createAsyncThunk<IBlogAPI, string, { rejectValue: string }>(
  "news/fetchSingleNews",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceNewsAPI.getNewsById(params);
    } catch (error) {
      const errorMessage = error as AxiosError;
      return rejectWithValue(errorMessage.message);
    }
  },
);

export const blogInfoSlice = createSlice({
  name: "blogInfo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.article = payload;
    });
    builder.addCase(fetchArticleById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchNewsById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNewsById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchNewsById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogInfoSlice.reducer;
