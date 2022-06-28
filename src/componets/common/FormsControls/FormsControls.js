import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.error ? meta.touched : undefined;
    return (
        <div className={hasError ? styles.formControl + " " + styles.error : undefined}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export const Textarea = (props) => {

    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {

    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (placeholder, name, component, validate, props={}, text="") => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component}
                   validate={validate} {...props}/> {text}
        </div>
    )
};