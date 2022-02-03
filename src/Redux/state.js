


let store = {
    _state: {
        messagesPage: {
            messagesData: [
                {id: 1, massage: 'Hello! How are you?'},
                {id: 2, massage: 'What you gonna do?'},
                {id: 3, massage: 'Yo'},
                {id: 4, massage: 'Yo'},
                {id: 5, massage: 'Yo'}
            ],
            dialogsData: [
                {id: 1, name: 'Serge'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Katrin'},
                {id: 4, name: 'Alex'},
                {id: 5, name: 'Ann'}

            ],

        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 17},
                {id: 2, message: 'YO!1', likesCount: 32}
            ],
            newPostText: 'yoyoyoyoyoy'

        }
    },
    getState (){
        debugger;
        return this._state;
    },
    _callSubscriber (){
        console.log('state has been changed')
    },
    addPost() {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;  // Наблюдатель (паттерн)
    },
};



export default store;
window.store = store;