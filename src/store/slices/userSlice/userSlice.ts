import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { FirebaseErrorCode, FirebaseErrorMessage, getFirebaseErrorMessage } from "utils";

interface IUserState {
  name: string;
  email: string | null;
  password: string;
  isAuth: boolean;
  error: null | string;
  isLoading: boolean;
}

const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

const initialState: IUserState = {
  name: userInfo && userInfo.name,
  email: userInfo && userInfo.email,
  password: "",
  isAuth: userInfo && userInfo.isAuth,
  error: null,
  isLoading: false,
};

export const fetchSignUp = createAsyncThunk<
  { userEmail: string | null; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignUp", async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    const name = userName;
    return { userEmail, name };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchSignIn = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string },
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignIn", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchResetPassword = createAsyncThunk<
  void,
  { email: string },
  { rejectValue: FirebaseErrorMessage }
>("user/fetchResetPassword", async ({ email }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
      state.email = payload;
    },
    logOut: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUp.pending, (state) => {
      state.isAuth = false;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchSignUp.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
      state.email = payload.userEmail;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchSignUp.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
        state.isLoading = false;
      }
    });

    builder.addCase(fetchSignIn.pending, (state) => {
      state.isAuth = false;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchSignIn.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
        state.isLoading = false;
      }
    });
    builder.addCase(fetchResetPassword.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state) => {
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        state.isLoading = false;
      }
    });
  },
});
export default userSlice.reducer;

export const { getUserName, logOut } = userSlice.actions;
