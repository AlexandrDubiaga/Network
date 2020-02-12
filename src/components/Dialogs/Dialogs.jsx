import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/Dialogitem";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = props => {
    const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.dialogsPage.messages.map(mess => <Message message={mess.message}/>);

    let addMessage = (newMessage) => {
        props.sendNewMessageActionCreator(newMessage.text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <AddMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;

