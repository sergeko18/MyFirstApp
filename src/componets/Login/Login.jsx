import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me
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