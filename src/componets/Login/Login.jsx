import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input}
                validate={[required, maxLength50 ]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required, maxLength50 ]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>Remember me
            </div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'login',                            // a unique name for this form
    //fields: ['login', 'password', 'rememberMe'] // all the fields in your form
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
            console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;