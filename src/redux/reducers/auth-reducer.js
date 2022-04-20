import { SET_AUTH } from "../types";

const initialState = {
  id: null,
  name: null,
  email: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.data,
        isAuth: action.auth,
      };
    default:
      return state;
  }
};

export const setAuthAC = (id, name, email,auth) => ({
  type: SET_AUTH,
  data: { id, name, email },
  auth
});

export default AuthReducer;
