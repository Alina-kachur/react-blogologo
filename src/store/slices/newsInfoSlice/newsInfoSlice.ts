import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceNewsAPI } from "services";
import { INewAPI } from "types/types";

interface INewsInfoState {
  news: INewAPI;
  isLoading: boolean;
  error: null | string;
}

export const fetchNewsInfo = createAsyncThunk<INewAPI, string, { rejectValue: string }>(
  "news/fetchNewsInfo",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceNewsAPI.getNewsByID(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);
const initialState: INewsInfoState = {
  news: {} as INewAPI,
  isLoading: false,
  error: null,
};
const newsInfoSlice = createSlice({
  name: "newsInfo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewsInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNewsInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchNewsInfo.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});
export default newsInfoSlice.reducer;
