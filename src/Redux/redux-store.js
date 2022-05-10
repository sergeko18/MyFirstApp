import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import massagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: massagesReducer,
    sidebar: sidebarReducer,

})

let store = createStore(reducers);

export default store;