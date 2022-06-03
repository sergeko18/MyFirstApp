import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";



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


const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}
                validate={[required, maxLength100]}/>
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