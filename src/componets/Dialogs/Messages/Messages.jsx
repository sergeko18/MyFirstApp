import React from 'react';
import Message from "./Message/MessageText";
import MessageButtonContainer from "./MessageButton/MessageButtonContainer";


const Messages = (props) => {

    let messagesElements =
        props.store.getState().messagesPage.messagesData.map(messageEl => <Message text={messageEl.message} id={messageEl.id}/>);

    return (
        <div>

            <div>
                {messagesElements}
            </div>

            <MessageButtonContainer store={props.store}/>
        </div>


    )
}
export default Messages;
