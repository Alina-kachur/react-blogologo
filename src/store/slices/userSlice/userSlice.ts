import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  email: null | string;
  id: null | string;
}

const initialState: IUser = {
  email: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.id = payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
