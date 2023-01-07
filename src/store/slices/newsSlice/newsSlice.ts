import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceNewsAPI } from "services";
import { INewAPI } from "types";

interface INewsState {
  news: INewAPI[];
  isLoading: boolean;
  error: null | string;
}

export const fetchNews = createAsyncThunk<INewAPI[], number, { rejectValue: string }>(
  "news/fetchNews",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceNewsAPI.getAllNews(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);
const initialState: INewsState = {
  news: [],
  isLoading: false,
  error: null,
};
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
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
export default newsSlice.reducer;
