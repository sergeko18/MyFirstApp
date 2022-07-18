import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userImg from "../../../assets/images/user.png"
import {Field} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)

    const goToEditMode = () => {
        return setEditMode(true)
    };

    if (!profile) {
        return <Preloader/>
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }


    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.discriptionBlock}>
                <div className={s.img2}>
                    {<img src={profile.photos.large || userImg} alt=""/>}
                </div>

                <div>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>

                <div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}
                </div>

                <div>
                    <b>Status:</b> <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>

            </div>


        </div>

    )
}
const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>
                {isOwner && <div>
                    <button onClick={goToEditMode}>Edit</button>
                </div>}
            </div>
            <div>
                <b>Name: {profile.fullName}</b>
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>My professional skills:</b>{profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me: </b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};


export default ProfileInfo;