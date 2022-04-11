import {combineReducers, createStore} from "redux";
import messageReducer from "./reducers/message-reducer";
import profileReducer from "./reducers/profile-reducer";
import asideReducer from "./reducers/aside-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    aside: asideReducer,
})

const store = createStore(reducers);
export default store;
