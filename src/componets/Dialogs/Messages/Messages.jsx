import React from 'react';
import Message from "./Message/MessageText";
import MessageButton from "./MessageButton/MessageButton";


const Messages = (props) => {

    let messagesElements =
        props.messagesData.map(messageEl => <Message text={messageEl.massage} id={messageEl.id}/>);

    return (
        <div>

            <div>
                {messagesElements}
            </div>

            <MessageButton/>
        </div>


    )
}
export default Messages;
