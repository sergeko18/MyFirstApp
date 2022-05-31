import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus/ProfileStatus";



const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
           {/* <div className={s.img1}>

                <img src='https://stimg.cardekho.com/images/car-images/930x620/Skoda/Superb/6764/1590559103723/227_Steel-Grey_454642.jpg?tr=w-420'/>


            </div>*/}

            <div className={s.img2}>
                <img src='https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'/>
            </div>

            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}  />
                Ava + discription
            </div>
        </div>

    )
}




export default ProfileInfo;