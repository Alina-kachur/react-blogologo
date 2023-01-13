import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { INewAPI } from "types";
import { FirebaseErrorCode, FirebaseErrorMessage, getFirebaseErrorMessage } from "utils";

interface IUserState {
  name: null | string;
  email: null | string;
  password: string;
  id: string | null;
  isAuth: boolean;
  favorites: INewAPI[];
  error: null | string;
}
interface ISignUp {
  email: string;
  password: string;
  userName: string;
}
const initialState: IUserState = {
  name: "",
  email: "",
  password: "",
  id: "",
  favorites: [],
  isAuth: false,
  error: null,
};

// export const fetchSignUp = createAsyncThunk<
//   IUserState,
//   ISignUp,
//   { rejectValue: FirebaseErrorMessage }
// >("user/fetchSignUp", async ({ email, userName, password }, { rejectWithValue }) => {
//   try {
//     const auth = getAuth();
//     const userData = createUserWithEmailAndPassword(auth, email, password);
//     const userEmail = (await userData).user.email;
//     const name = userName;

//     return { userEmail, name };
//   } catch (error) {
//     const firebaseError = error as {code: FirebaseErrorCode} };
//     return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
//   }
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<string>) => {
      state.isAuth = true;
      state.email = payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    // addFavorites: (state, { payload }: PayloadAction<INewAPI[]>) => {
    //   state.favorites = [
    //     { ...payload},
    //     ...state.favorites.filter((item) => item.id !== payload.id),
    //   ];
    // },
    removeFavorites: (state, { payload }: PayloadAction<INewAPI>) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload.id);
    },
  },
});

export const {
  setUser,
  setUserName,
  // addFavorites,
  // removeFavorites,
} = userSlice.actions;
export default userSlice.reducer;
