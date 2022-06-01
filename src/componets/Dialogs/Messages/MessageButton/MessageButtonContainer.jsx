import React from 'react';
import {sendMessageCreator} from "../../../../Redux/messages-reducer";
import MessageButton from "./MessageButton";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageBody: state.messagesPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }

    }
}
const MessageButtonContainer = connect(mapStateToProps, mapDispatchToProps)(MessageButton)

export default MessageButtonContainer;
