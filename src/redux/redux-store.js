import { combineReducers, createStore } from "redux";
import messageReducer from "./reducers/message-reducer";
import profileReducer from "./reducers/profile-reducer";
import asideReducer from "./reducers/aside-reducer";
import friendsReducer from "./reducers/friends-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  friendsPage: friendsReducer,
  aside: asideReducer,
});

const store = createStore(reducers);

window.state = store.getState();

export default store;
