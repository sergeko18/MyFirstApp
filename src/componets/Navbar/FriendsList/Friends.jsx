import React from 'react';

import s from './Friends.module.css';
import {NavLink, Route, withRouter} from "react-router-dom";

const Friends = () => {
    return (
        <Route>
            <div className={s.frdswrapper}>

            <div className={s.item}>
                <img src={'https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'}/>
                Jorje
            </div>

            <div className={s.item}>
                <img src={'https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'}/>
                Ivan
            </div>

            <div className={s.item}>
                <NavLink to={`/profile/2`}>
                    <img src={'https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'}/>
                    Dimon
                </NavLink>
            </div>


        </div>
        </Route>

    )

}

export default withRouter(Friends);