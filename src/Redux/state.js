const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
            newMessageBody: "555777"

        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 17},
                {id: 2, message: 'YO!1', likesCount: 32}
            ],
            newPostText: 'yoyoyoyoyoy'

        }
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

        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let floopy = {
                id: 7,
                message: this._state.messagesPage.newMessageBody,
            };
            this._state.messagesPage.messagesData.push(floopy);
            this._state.messagesPage.newMessageBody = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        }


    }
    ,


};

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);


export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body}
);
export const sendMessageCreator = () => (
    {type: SEND_MESSAGE}
);


export default store;
window.store = store;