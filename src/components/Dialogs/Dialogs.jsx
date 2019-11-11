import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/Dialogitem";

const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Solmir__"},
        {id: 3, name: "Hworang"},
        {id: 4, name: "Paul"},
        {id: 5, name: "Messi"}
    ]

    const messages = [
        {id: 1, message: "I winnig incubator"},
        {id: 2, message: "React"},
        {id: 3, message: "Redux"},
        {id: 4, message: "Flux"}
    ]
    const dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = messages.map(mess => <Message message={mess.message}/>);
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>

        </div>
    );
}

export default Dialogs;

