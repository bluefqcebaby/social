import avatar from "../../img/avatar.jpg";
import banner from "../../img/banner-profile.jpg";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, getStatus, setStatus } from "../../requests";

const initialState = {
  profileInfo: {
    name: "Andrey Anisimov",
    description: "Love writing code and do sport on a fresh air, also I play some league",
    avatar: avatar,
    banners: [banner, banner, banner],
  },
  profileInfoAPI: null,
  status: null,
  posts: [
    {
      id: 1,
      text: "What@",
    },
    {
      id: 2,
      text: "Yaaay its so fun 🤨",
    },
    {
      id: 3,
      text: "#NOWAR 🥺🥺🥺",
    },
    {
      id: 4,
      text: " dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf s",
    },
  ],
  newPostText: "",
};

export const fetchProfile = createAsyncThunk("profile/fetchProfile", async action => {
  const response = await getProfile(action);
  const statusResponse = await getStatus(action);
  return [response.data, statusResponse.data];
});

export const fetchStatus = createAsyncThunk("profile/fetchStatus", async action => {
  await setStatus(action);
  return action;
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost: state => {
      if (state.newPostText.trim()) {
        state.posts.push({ text: state.newPostText });
      }
      state.newPostText = "";
    },
    postTextChange: (state, { payload }) => {
      state.newPostText = payload;
    },
    updateUser: (state, { payload }) => {
      state.profileInfoAPI = payload;
    },
  },
  extraReducers: {
    [fetchProfile.fulfilled]: (state, { payload }) => {
      state.profileInfoAPI = payload[0];
      state.status = payload[1];
    },
    [fetchStatus.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.status = payload;
    },
  },
});

export const { addPost, postTextChange, updateUser } = profileSlice.actions;

export default profileSlice.reducer;
