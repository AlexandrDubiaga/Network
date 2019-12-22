import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/Dialogitem";


const Dialogs = props => {
    const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.dialogsPage.messages.map(mess => <Message message={mess.message}/>);

    let newMessageRef = React.createRef();
    let addMessage = () => {
        props.sendNewMessageActionCreator();
    }
    let onMessageChange = () => {
        let text = newMessageRef.current.value;
        props.updateNewMessageActionCreator(text);
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
                              value={props.dialogsPage.newMessageBody}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

