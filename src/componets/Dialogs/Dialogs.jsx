import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";





const Dialogs = () => {

    return (

        <div className={s.dialogs}>

            <DialogsListContainer />

            <MessagesContainer />

        </div>
    )
}
export default Dialogs;
