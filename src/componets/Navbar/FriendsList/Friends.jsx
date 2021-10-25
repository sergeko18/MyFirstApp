import React from 'react';

import s from './Friends.module.css';

const Friends =()=>{
    return (
        <div className={s.frdswrapper}>
            <friends>
                <div className={s.item}>
                    <img src={'https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'}/>
                    Jorje
                </div>

                <div className={s.item}>
                    <img src={'https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'}/>
                    Ivan
                </div>

                <div className={s.item}>
                    <img src={'https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'}/>
                    Dimon
                </div>
            </friends>

        </div>

    )

}

export default Friends;