import {ADD_POST, POST_TEXT_CHANGE_HANDLER} from "../types";
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
      text: "What@",
    },
    {
      text: "Yaaay its so fun 🤨",
    },
    {
      text: "#NOWAR 🥺🥺🥺",
    },
    {
      text: " dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf dobre sdjhf s",
    },
  ],
  newPostText: "",
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({text: state.newPostText});
      state.newPostText = "";
      return state;
    case POST_TEXT_CHANGE_HANDLER:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const postTextChangeActionCreator = text => ({
  type: POST_TEXT_CHANGE_HANDLER,
  newText: text,
});

export default ProfileReducer;
