import chopper from "../../img/chooper.png";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  dialogs: [
    {
      id: 1,
      lastMessage: "nikita d",
      avatar: chopper,
      name: "Andrey",
    },
    {
      id: 2,
      lastMessage: "lol",
      avatar: chopper,
      name: "Dima",
    },
    {
      id: 3,
      lastMessage: "thanks!",
      avatar: chopper,
      name: "Oleg",
    },
    {
      id: 4,
      lastMessage: "long time no see!",
      avatar: chopper,
      name: "Sasha",
    },
    {
      id: 5,
      lastMessage: "what the fuck bro? !!!",
      avatar: chopper,
      name: "Denis",
    },
    {
      id: 6,
      lastMessage: "wyd",
      avatar: chopper,
      name: "Nikita",
    },
  ],
  messages: [
    {
      text: "Hey",
    },
    {
      text: "Wtf",
    },
    {
      text: "NO WAAR",
    },
  ],
  newMessageText: "",
};



const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push({ text: payload.newMessageText });
    },
    messageTextChange: (state, { payload }) => {
      state.newMessageText = payload.text;
    },
  },
});


export const {addMessage, messageTextChange} = messagesSlice.actions;

export default messagesSlice.reducer;
