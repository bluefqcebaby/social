import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkAuth } from "../../requests";
import { changeProfileLink } from "./asideSlice";

const initialState = {
  id: null,
  name: null,
  email: null,
  isAuth: false,
};

export const fetchAuthInfo = createAsyncThunk(
  "auth/fetchAuthInfo",
  async (_, { dispatch }) => {
    const response = await checkAuth();
    const data = response.data;
    if (data.resultCode === 1) {
      return { ...data.data, isAuth: false };
    } else if (data.resultCode === 0) {
      dispatch(changeProfileLink(data.data.id));
      return { ...data.data, isAuth: true };
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      return {
        ...payload,
      };
    },
  },
  extraReducers: {
    [fetchAuthInfo.fulfilled]: (state, { payload }) => {
      return { ...payload };
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
