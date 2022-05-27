import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import massagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: massagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,

})

let store = createStore(reducers);
window.store = store;

export default store;

