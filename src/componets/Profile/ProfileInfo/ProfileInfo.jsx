import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userImg from "../../../assets/images/user.png"



const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile){
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>


            <div className={s.discriptionBlock}>

                <div className={s.img2}>
                    {<img src={profile.photos.large || userImg} alt=""/> }
                </div>
                
                <div>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>

                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}  />
                </div>

            </div>


        </div>

    )
}




export default ProfileInfo;