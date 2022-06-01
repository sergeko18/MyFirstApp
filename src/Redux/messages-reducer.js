const SEND_MESSAGE = 'SEND_MESSAGE';

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

    ]
};

const massagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let floopy = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: floopy}],

            };
        }


        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => (
    {type: SEND_MESSAGE, newMessageBody}
);

export default massagesReducer;