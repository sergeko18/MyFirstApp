import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.img1}>

                <img
                    src='https://stimg.cardekho.com/images/car-images/930x620/Skoda/Superb/6764/1590559103723/227_Steel-Grey_454642.jpg?tr=w-420'></img>
            </div>

            <div className={s.img2}>
                <img src='https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'/>
            </div>

            <div className={s.discriptionBlock}>
                Ava + discription
            </div>
        </div>

    )
}




export default ProfileInfo;