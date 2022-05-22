import React from 'react';
import DialogsList from "./DialogsList";
import {connect} from "react-redux";


/*Функция выше трасформирует(мапит) массив элементов в массив других (трансформируемых) элементов*/



let mapStateToProps = (state) =>{
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}

const DialogsListContainer = connect(mapStateToProps)(DialogsList)

export default DialogsListContainer;
