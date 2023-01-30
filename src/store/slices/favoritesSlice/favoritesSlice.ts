import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlogAPI } from "types";

interface IFavoritesState {
  favorites: IBlogAPI[];
}

const initialState: IFavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IBlogAPI>) {
      const result = state.favorites.find((favorite) => favorite.id === payload.id);
      !result && state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorites: (state, { payload }: PayloadAction<IBlogAPI>) => {
      state.favorites = state.favorites.filter((fav) => fav.id !== payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites, removeFavorites } = favoritesSlice.actions;
