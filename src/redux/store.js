import { configureStore } from "@reduxjs/toolkit";
import asideReducer from "./slices/asideSlice";
import authReducer from "./slices/authSlice";
import messagesReducer from "./slices/messagesSlice";
import profileReducer from "./slices/profileSlice";
import usersReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    aside: asideReducer,
    auth: authReducer,
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
  },
});

window.store = store.getState();
