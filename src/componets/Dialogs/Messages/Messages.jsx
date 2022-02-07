import React from 'react';
import Message from "./Message/MessageText";
import MessageButton from "./MessageButton/MessageButton";



const Messages = (props) => {

    let messagesElements =
        props.messagesPage.messagesData.map(messageEl => <Message text={messageEl.message} id={messageEl.id}/>);

    return (
        <div>

            <div>
                {messagesElements}
            </div>

            <MessageButton store={props.store} dispatch= {props.dispatch} state={props.state}/>
        </div>


    )
}
export default Messages;
