import React from 'react';
import DialogsList from "./DialogsList";
import StoreContext from "../../../StoreContext";


/*Функция выше трасформирует(мапит) массив элементов в массив других (трансформируемых) элементов*/


const DialogsListContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return (
                    <DialogsList dialogsData={store.getState().messagesPage.dialogsData}/>

                )
            }
            }
        </StoreContext.Consumer>)
}
export default DialogsListContainer;
