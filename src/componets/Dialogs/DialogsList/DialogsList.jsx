import React from 'react';
import s from '../Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";




/*Функция выше трасформирует(мапит) массив элементов в массив других (трансформируемых) элементов*/

/*let dialogsElements = [
    <DialogsItem name={dilogsData[0].name} id={dilogsData[0].id}/>,
    <DialogsItem name={dilogsData[1].name} id={dilogsData[1].id}/>,
    <DialogsItem name={dilogsData[2].name} id={dilogsData[2].id}/>,
    <DialogsItem name={dilogsData[3].name} id={dilogsData[3].id}/>,
    <DialogsItem name={dilogsData[4].name} id={dilogsData[4].id}/>
];*/

const DialogsList = (props) => {

    /*let dialogsData = [
        {id: 1, name: 'Serge'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Katrin'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Ann'}
    ];*/

    let dialogsElements =
        props.dialogsData.map (dialog => <DialogsItem name={dialog.name} id={dialog.id}/> );

    return (
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>

    )
}
export default DialogsList;
