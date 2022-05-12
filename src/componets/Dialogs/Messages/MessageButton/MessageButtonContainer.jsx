import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/messages-reducer";

import MessageButton from "./MessageButton";


const MessageButtonContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };


    return ( <MessageButton updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} newMessageBody={newMessageBody}/>)
};

export default MessageButtonContainer;
