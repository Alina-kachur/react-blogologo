import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ITheme {
  currentTheme: Theme;
}

const initialState: ITheme = {
  currentTheme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.currentTheme = payload === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
