import React from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
    }
}

const MessagesContainer = connect(mapStateToProps)(Messages)

export default MessagesContainer;