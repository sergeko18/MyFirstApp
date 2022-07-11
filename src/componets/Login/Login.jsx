import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"


export const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Email", "email", Input, [required, maxLength50 ] )}
            {createField("Password", "password", Input, [required, maxLength50 ], {type: "password"} )}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"}, )}
            {props.error && <div className={s.formSummaryError}>
                <span className={s.formSummaryErrorText}>
                    {props.error}
                </span>
            </div>}
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
            props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth

})

export default connect(mapStateToProps ,{ login })(Login);