import { combineReducers, createStore } from "redux";
import messageReducer from "./reducers/message-reducer";
import profileReducer from "./reducers/profile-reducer";
import asideReducer from "./reducers/aside-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";



const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
  aside: asideReducer,
  auth: authReducer,
});

const store = createStore(reducers);

window.state = store.getState();

export default store;
