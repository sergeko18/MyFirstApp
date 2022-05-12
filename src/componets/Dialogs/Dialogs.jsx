import React from 'react';
import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogsList from "./DialogsList/DialogsList";





const Dialogs = (props) => {

    return (

        <div className={s.dialogs}>

            <DialogsList store={props.store} />

            <Messages store={props.store} />

        </div>
    )
}
export default Dialogs;
