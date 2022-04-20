import avatar from "../img/avatar.jpg";
import banner from "../img/banner-profile.jpg";
import { BiNews } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { ImMusic } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { RiGamepadFill } from "react-icons/ri";
import chopper from "../img/chooper.png";
import MessageReducer from "./reducers/message-reducer";
import ProfileReducer from "./reducers/profile-reducer";
import AsideReducer from "./reducers/aside-reducer";


let handwritedStore = {

  _state: {
    profilePage: {
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
    },
    messagesPage: {
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
    },
    aside: {
      menuItems: [
        {
          text: "Profile",
          logo: <CgProfile />,
          route: "/profile",
        },
        {
          text: "News",
          logo: <BiNews />,
          route: "/news",
        },
        {
          text: "Messages",
          logo: <SiGooglemessages />,
          route: "/messages",
        },
        {
          text: "Music",
          logo: <ImMusic />,
          route: "/music",
        },
        {
          text: "Friends",
          logo: <BsPeopleFill />,
          route: "/users",
        },
        {
          text: "Groups",
          logo: <HiUserGroup />,
          route: "/groups",
        },
        {
          text: "Games",
          logo: <RiGamepadFill />,
          route: "/games",
        },
        {
          text: "Help",
          logo: <BiHelpCircle />,
          route: "/help",
        },
      ],
    },
  },
  _renderEntireTree: () => {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },

  dispatch(action) {
    this._state.messagesPage = MessageReducer(this._state.messagesPage, action);
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.aside = AsideReducer(this._state.aside, action);
    this._renderEntireTree(this._state);
  },

};

window.store = handwritedStore;

export default handwritedStore;
