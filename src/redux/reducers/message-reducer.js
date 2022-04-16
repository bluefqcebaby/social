import {ADD_MESSAGE, MESSAGE_TEXT_CHANGE_HANDLER} from "../types";
import chopper from "../../img/chooper.png";


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
}

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {text: state.newMessageText}],
        newMessageText: "",
      }
    case MESSAGE_TEXT_CHANGE_HANDLER:
      return {
        ...state,
        newMessageText: action.newText,
      }
    default:
      return state;
  }
};


export const addMessageAC = () => ({ type: ADD_MESSAGE });
export const newMessageTextAC = text => ({
  type: MESSAGE_TEXT_CHANGE_HANDLER,
  newText: text,
});
export default MessageReducer;
