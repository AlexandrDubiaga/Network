import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/Dialogitem";
import {sendNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";


const Dialogs = props => {
    const dialogsElements = props.store._state.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.store._state.dialogsPage.messages.map(mess => <Message message={mess.message}/>);

    let newMessageRef = React.createRef();
    let addMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageRef.current.value;
        props.store.dispatch(updateNewMessageActionCreator(text));
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
                <div>
                    <textarea ref={newMessageRef} onChange={onMessageChange}
                              value={props.store._state.dialogsPage.newMessageBody}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

