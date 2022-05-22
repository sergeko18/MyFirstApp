import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/messages-reducer";
import MessageButton from "./MessageButton";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageBody: state.messagesPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },

        sendMessage: () => {
            dispatch(sendMessageCreator());
        }

    }
}
const MessageButtonContainer = connect(mapStateToProps, mapDispatchToProps)(MessageButton)

export default MessageButtonContainer;
