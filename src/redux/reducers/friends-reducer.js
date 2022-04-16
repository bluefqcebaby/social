import killer from "../../img/friedns/killer.jpg";
import dima from "../../img/friedns/dima.jpg";
import dolboeb from "../../img/friedns/dolboeb.jpg";
import { TOGGLE_FOLLOW, SET_FRIENDS } from "../types";

const initialState = {
  friends: [
    {
      id: 1,
      name: "Dima Solomatin",
      followed: true,
      photo: dima,
      description: "I love to make games on Unity",
      city: "Nepecino",
    },
    {
      id: 2,
      name: "Killer Anisimov",
      followed: false,
      photo: killer,
      description: "I love to kill things",
      city: "Bali",
    },
    {
      id: 3,
      name: "Daun Bondarenko",
      followed: true,
      photo: dolboeb,
      description:
        "i love crying all day long and also im shitty lol mid player god save my friend from my unskill",
      city: "UnskillTown",
    },
  ],
};

const AsideReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        friends: state.friends.map(f => ({
          ...f,
          followed: action.id === f.id ? !f.followed : f.followed,
        })),
      };
    case SET_FRIENDS:
      return {
        ...state,
        friends: [...state.friends, ...action.friends],
      };
    default:
      return state;
  }
};

export const toggleFollowAC = userId => ({ type: TOGGLE_FOLLOW, id: userId });
export const setFriendsAC = friends => ({ type: SET_FRIENDS, friends });

export default AsideReducer;
