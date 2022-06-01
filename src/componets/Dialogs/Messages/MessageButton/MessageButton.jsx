import React from 'react';
import {Field, reduxForm} from "redux-form";



const MessageButton = (props) => {
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };


    return (

            <div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>

    )
}

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'dialogAddMessageReduxForm',                            // a unique name for this form
    //fields: ['login', 'password', 'rememberMe'] // all the fields in your form
})(AddMessageForm);


export default MessageButton;