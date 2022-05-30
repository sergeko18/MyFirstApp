import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import {Redirect} from "react-router-dom";





const Dialogs = (props) => {

    if(!props.isAuth) return <Redirect to={'/login'} />



    return (

        <div className={s.dialogs}>

            <DialogsListContainer />

            <MessagesContainer />

        </div>
    )
}
export default Dialogs;
