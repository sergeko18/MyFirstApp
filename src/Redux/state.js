let rerenderEntireTree = () => {
    console.log ('state changed');
}


let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;  // Наблюдатель (паттерн)
}



export default state;