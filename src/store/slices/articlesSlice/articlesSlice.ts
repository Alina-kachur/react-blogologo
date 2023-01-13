import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { title } from "process";
import { spaceNewsAPI } from "services";
import { IArticleAPI } from "types";

interface IArticleState {
  articles: IArticleAPI[];
  isLoading: boolean;
  error: null | string;
  search: ISearch;
}
interface ISearch {
  title: string | null;
}
const initialState: IArticleState = {
  articles: [],
  isLoading: false,
  error: null,
  search: { title: null },
};
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
export const fetchArticlesBySearch = createAsyncThunk<
  IArticleAPI[],
  string,
  { rejectValue: string }
>("articles/fetchArticlesBySearch", async (titleWord, { rejectWithValue }) => {
  try {
    return await spaceNewsAPI.getNewsArticlesBySearch(titleWord);
  } catch (error) {
    return rejectWithValue("Error");
  }
});

const articleSlice = createSlice({
  name: "articles",
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
    builder.addCase(fetchArticlesBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    // builder.addCase(fetchArticlesBySearch.fulfilled, (state, action) => {
    //   state.articles = action.payload.articles;
    //   state.status = "success";
    //   state.total = action.payload.total;
    // });
    // builder.addCase(fetchArticlesBySearch.rejected, (state, action) => {
    //   state.error = payload;
    //   state.status = "error";
  },
});
export default articleSlice.reducer;
