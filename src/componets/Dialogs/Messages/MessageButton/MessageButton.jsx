import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/massages-reducer";


const MessageButton = (props) => {

    let state = props.store.getState().messagesPage;

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    };


    return (
        <div>
            <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}>


                </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default MessageButton;