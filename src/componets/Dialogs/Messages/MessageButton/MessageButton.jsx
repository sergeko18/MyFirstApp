import React from 'react';



const MessageButton = (props) => {

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessage(body);
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