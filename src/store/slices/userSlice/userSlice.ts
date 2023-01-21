import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { FirebaseErrorCode, FirebaseErrorMessage, getFirebaseErrorMessage } from "utils";

interface IUserState {
  name: string;
  surname: string;
  email: null | string;
  password: string;
  isAuth: boolean;
  // favorites: INewAPI[];
  error: null | string;
}
interface ISignUp {
  email: string;
  password: string;
  userName: string;
  userSurname: string;
}
interface ISignIn {
  email: string;
  password: string;
}
interface IUserEmail {
  userEmail: string | null;
}

interface IUserData {
  userEmail: string | null;
  name: string;
  surname: string;
}

const initialState: IUserState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  isAuth: false,
  error: null,
};

export const fetchSignUp = createAsyncThunk<
  IUserData,
  ISignUp,
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignUp", async ({ email, password, userName, userSurname }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    const name = userName;
    const surname = userSurname;

    return { userEmail, name, surname };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchSignIn = createAsyncThunk<
  IUserEmail,
  ISignIn,
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignIn", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const userEmail = userCredential.user.email;

    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchSignOut = createAsyncThunk<
  void,
  undefined,
  { rejectValue: FirebaseErrorMessage }
>("user/fetchSignOut", async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await signOut(auth);
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
      if (payload) state.name = payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchSignUp.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUp.fulfilled, (state, { payload }) => {
      state.error = null;
      state.email = payload.userEmail;

      state.isAuth = true;
      state.name = payload.name;
      state.surname = payload.surname;
    });
    builder.addCase(fetchSignUp.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        state.isAuth = false;
      }
    });
    builder.addCase(fetchSignIn.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
      state.error = null;
      state.email = payload.userEmail;

      state.isAuth = true;
    });
    builder.addCase(fetchSignIn.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        state.isAuth = true;
      }
    });
    builder.addCase(fetchSignOut.pending, (state) => {
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(fetchSignOut.fulfilled, (state) => {
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        state.isAuth = true;
      }
    });
  },
});

export default userSlice.reducer;
export const { getUserName } = userSlice.actions;
