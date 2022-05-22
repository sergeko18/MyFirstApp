const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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

};

const massagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let floopy = {
                id: 7,
                message: state.newMessageBody,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, floopy],
                newMessageBody:''
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {...state,
            newMessageBody: action.newBody}
        }

        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, newBody: body}
);
export const sendMessageCreator = () => (
    {type: SEND_MESSAGE}
);

export default massagesReducer;