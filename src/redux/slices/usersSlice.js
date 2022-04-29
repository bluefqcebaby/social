import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, toggleFollowApi } from "../../requests";

const initialState = {
  users: null,
  currentPage: 1,
  contentPerPage: 8,
  allUsers: 0,
  isLoad: false,
  isError: false,
};

export const fetchFollow = createAsyncThunk(
  "users/fetchFollow",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const { id, followed } = payload;
      const response = await toggleFollowApi(id, followed);
      if (response.data.resultCode !== 0) {
        throw new Error("Something wrong with follow endpoint");
      }
      dispatch(toggleFollow(id));
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewUsers = createAsyncThunk(
  "users/fetchNewUsers",
  async (page, { dispatch, rejectWithValue }) => {
    try {
      const result = await getUsers(page);
      if (result.status !== 200) {
        throw new Error("Fuck You!");
      }
      dispatch(setCurrentPage(page));
      return result.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleFollow: (state, { payload }) => {
      state.users.forEach(item => {
        if (item.id === payload) item.followed = !item.followed;
      });
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    usersAmount: (state, { payload }) => {
      state.allUsers = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setIsLoad: (state, action) => {
      state.isLoad = !state.isLoad;
    },
  },
  extraReducers: {
    [fetchNewUsers.pending]: state => {
      state.isLoad = true;
    },
    [fetchNewUsers.fulfilled]: (state, { payload }) => {
      const { items, totalCount } = payload;
      state.isLoad = false;
      state.users = items;
      state.allUsers = totalCount;
    },
    [fetchNewUsers.rejected]: (state, { payload }) => {
      state.isError = true;
      console.log("fetchNewUsers Error >>> ", payload);
    },
  },
});

export const { toggleFollow, setUsers, usersAmount, setCurrentPage, setIsLoad } =
  usersSlice.actions;

export default usersSlice.reducer;
