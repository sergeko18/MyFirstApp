import React from 'react';
import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DilogsList from "./DialogsList/DialogsList";



const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>

            <DilogsList />

            <Messages/>

        </div>
    )
}
export default Dialogs;
