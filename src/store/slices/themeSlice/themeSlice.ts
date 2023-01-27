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
    toggleTheme: (state) => {
      state.currentTheme === "light"
        ? (state.currentTheme = "dark")
        : (state.currentTheme = "light");
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
