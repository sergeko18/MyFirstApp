import React, {useState} from 'react';
import s from './ProfileInfo.module.css'

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userImg from "../../../assets/images/user.png"
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {maxLength50} from "../../Login/Login";
import {Contact} from "./ProfileInfo";
import style from "../../common/FormsControls/FormsControls.module.css"


const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <span>Name</span>{createField("Name", "fullName", Input, [required, maxLength50])}
            </div>

            <div>
                Looking for a job:{createField(null, "lookingForAJob", Input, [], {type: "checkbox"})}
            </div>

            <div>
                My professional skills:{createField("Enter your main skills", "lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                About me: {createField("Tell about yourself", "aboutMe", Textarea, [])}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contacts}>
                    <span>{key}:</span>
                    {createField(key, "contacts."+key , Input, )}
                </div>
            })}
            </div>

            {props.error && <div className={style.formSummaryError}>
                <span>
                    {props.error}
                </span>
            </div>}

            <dvi>
                <button>Save</button>

            </dvi>


        </form>
    )
};
const ProfileDataReduxForm = reduxForm({form: 'profileData'})(ProfileDataForm);


export default ProfileDataReduxForm;