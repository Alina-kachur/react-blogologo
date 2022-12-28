import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  surname: string;
  email: string;
  isAuth: boolean;
}

const initialState: IUser = {
  name: "",
  surname: "",
  email: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      (state.name = action.payload.name),
        (state.surname = action.payload.surname),
        (state.email = action.payload.email),
        (state.isAuth = !state.isAuth);
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
