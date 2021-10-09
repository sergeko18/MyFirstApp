import React from 'react';
import Message from "./Message/MessageText";

/*let messagesData = [
    {id: 1, massage: 'Hello! How are you?'},
    {id: 2, massage: 'What you gonna do?'},
    {id: 3, massage: 'Yo'},
    {id: 4, massage: 'Yo'},
    {id: 5, massage: 'Yo'}
];*/



/*let messagesElements = [
    <Message text={messagesData[0].massage} id={messagesData[0].id}/>,
    <Message text={messagesData[1].massage} id={messagesData[1].id}/>,
    <Message text={messagesData[2].massage} id={messagesData[2].id}/>,
    <Message text={messagesData[3].massage} id={messagesData[3].id}/>,
    <Message text={messagesData[4].massage} id={messagesData[4].id}/>
];*/


const Messages = (props) => {

    let messagesElements =
        props.messagesData.map(messageEl =><Message text={messageEl.massage} id={messageEl.id}/> );

    return (

        <div>
            {messagesElements}
        </div>


)
}
export default Messages;
