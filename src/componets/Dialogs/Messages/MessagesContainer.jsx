import React from 'react';
import Messages from "./Messages";
import StoreContext from "../../../StoreContext";


const MessagesContainer = () => {
    return (
    <StoreContext.Consumer>
        {(store) => {
            return <Messages messagesData={store.getState().messagesPage.messagesData}
            store={store}/>
        }}
    </StoreContext.Consumer>)
}
export default MessagesContainer;