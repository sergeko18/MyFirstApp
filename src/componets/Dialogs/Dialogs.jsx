import React from 'react';
import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogsList from "./DialogsList/DialogsList";





const Dialogs = (props) => {

    return (

        <div className={s.dialogs}>

            <DialogsList store={props.store}
                         dialogsData={props.messagePage.dialogsData}
                         dispatch={props.dispatch}/>

            <Messages store={props.store}
                      messagesPage={props.messagePage}
                      dispatch={props.dispatch}
                      state={props.state} />

        </div>
    )
}
export default Dialogs;
