import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosError } from "axios";
import { TabValue } from "config/tabValue";
import { spaceNewsAPI } from "services";
import { IBlogAPI } from "types";

interface IBlogState {
  articles: IBlogAPI[];
  news: IBlogAPI[];
  isLoading: boolean;
  error: null | string;
  search: ISearch;
}

interface ISearch {
  title: string | null;
}

const initialState: IBlogState = {
  articles: [],
  news: [],
  isLoading: false,
  error: null,
  search: { title: null },
};

export const fetchArticles = createAsyncThunk<
  IBlogAPI[],
  { page: number },
  { rejectValue: string }
>("articles/fetchArticles", async (params, { rejectWithValue }) => {
  try {
    return await spaceNewsAPI.getBlog(
      params.page,

      TabValue.ARTICLES_VALUE,
    );
  } catch (error) {
    const errorMessage = error as AxiosError;
    return rejectWithValue(errorMessage.message);
  }
});

export const fetchNews = createAsyncThunk<IBlogAPI[], { page: number }, { rejectValue: string }>(
  "news/fetchNews",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceNewsAPI.getBlog(
        params.page,

        TabValue.NEWS_VALUE,
      );
    } catch (error) {
      const errorMessage = error as AxiosError;
      return rejectWithValue(errorMessage.message);
    }
  },
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search.title = payload.title;
    },
  },
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

    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogSlice.reducer;
export const { setSearch } = blogSlice.actions;
