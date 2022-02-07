import React from 'react';
import s from '../Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";




/*Функция выше трасформирует(мапит) массив элементов в массив других (трансформируемых) элементов*/


const DialogsList = (props) => {



    let dialogsElements =
        props.dialogsData.map (dialog => <DialogsItem name={dialog.name} id={dialog.id}/> );

    return (
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>

    )
}
export default DialogsList;
