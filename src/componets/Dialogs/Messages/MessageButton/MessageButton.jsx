import React from 'react';


const MessageButton = () => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }
    return (
        <div>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default MessageButton;