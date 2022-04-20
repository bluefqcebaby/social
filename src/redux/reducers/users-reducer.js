import killer from "../../img/friedns/killer.jpg";
import dima from "../../img/friedns/dima.jpg";
import dolboeb from "../../img/friedns/dolboeb.jpg";
import {TOGGLE_FOLLOW, SET_USERS, SET_IS_LOAD, USERS_AMOUNT, SET_CURRENT_PAGE} from "../types";

const initialState = {
  users: null,
  currentPage: 1,
  contentPerPage: 8,
  allUsers: 0,
  isLoad: false,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((f) => ({
          ...f,
          followed: action.id === f.id ? !f.followed : f.followed,
        })),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case USERS_AMOUNT:
      return {
        ...state,
        allUsers: action.amount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_IS_LOAD:
      return {
        ...state,
        isLoad: !state.isLoad,
      }
    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, id: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setUsersAmountAC = (amount) => ({
  type: USERS_AMOUNT,
  amount,
});
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const changeIsLoadAC = () => ({
  type: SET_IS_LOAD,
});


export default UsersReducer;
