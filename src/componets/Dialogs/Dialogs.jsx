import React from 'react';
import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogsList from "./DialogsList/DialogsList";




const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>

            <DialogsList dialogsData={props.dialogsData} />

            <Messages messagesData={props.messagesData}/>

        </div>
    )
}
export default Dialogs;
