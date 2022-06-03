import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <dvi>
                <Field placeholder={"Enter your post"} name={"newPostElement"} component={Textarea}
                        validate={[required, maxLength10]}
                /><br/>
            </dvi>
            <dvi>
                <button>Add post</button>
                <button>Remove</button>
            </dvi>


        </form>
    )
}

const PostReduxForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'PostReduxForm',                            // a unique name for this form
    //fields: ['login', 'password', 'rememberMe'] // all the fields in your form
})(PostForm);


export default PostReduxForm;