import { ADD_POST, POST_TEXT_CHANGE_HANDLER } from "../types";
import avatar from "../../img/avatar.jpg";
import banner from "../../img/banner-profile.jpg";

const initialState = {
  profileInfo: {
    name: "Andrey Anisimov",
    description:
      "Love writing code and do sport on a fresh air, also I play some league",
    avatar: avatar,
    banners: [banner, banner, banner],
  },
  posts: [
    {
      id:1,
      text: "What@",
    },
    {
      id:2,
      text: "Yaaay its so fun 🤨",
    },
    {
      id:3,
      text: "#NOWAR 🥺🥺🥺",
    },
    {
      id:4,
      text: " dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf s",
    },
  ],
  newPostText: "",
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { text: state.newPostText }],
        newPostText: "",
      };
    case POST_TEXT_CHANGE_HANDLER:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const postTextChangeActionCreator = (text) => ({
  type: POST_TEXT_CHANGE_HANDLER,
  newText: text,
});

export default ProfileReducer;
