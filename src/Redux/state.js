import profileReducer from "./profile-reducer";
import massagesReducer from "./massages-reducer";
import sidebarReducer from "./sidebar-reducer";
debugger;
let store = {
    _state: {
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hello! How are you?'},
                {id: 2, message: 'What you gonna do?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogsData: [
                {id: 1, name: 'Serge'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Katrin'},
                {id: 4, name: 'Alex'},
                {id: 5, name: 'Ann'}

            ],
            newMessageBody: ""

        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 17},
                {id: 2, message: 'YO!1', likesCount: 32}
            ],
            newPostText: 'yoyoyoyoyoy'

        },

        sidebar: { }
    },
    _callSubscriber() {
        console.log('state has been changed')
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;  // Наблюдатель (паттерн)
    },

    dispatch(action) {     // {type: 'ADD-POST'}

        profileReducer(this._state.profilePage, action);
        massagesReducer(this._state.messagesPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
};




export default store;
window.store = store;