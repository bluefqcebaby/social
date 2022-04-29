
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [
    {
      route: "profile",
    },
    {
      route: "news",
    },
    {
      route: "messages",
    },
    {
      route: "music",
    },
    {
      route: "users/1",
    },
    {
      route: "groups",
    },
    {
      route: "games",
    },
    {
      route: "help",
    },
  ],
};

const asideSlice = createSlice({
  name: "aside",
  initialState,
  reducers: {
    changeProfileLink: (state, { payload }) => {
      state.routes[0].route = `profile/${payload}`;
    },
  },
});

export const { changeProfileLink } = asideSlice.actions;

export default asideSlice.reducer;
