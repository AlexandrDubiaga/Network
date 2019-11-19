import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = props => {
    let addMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }
    return (<Dialogs onMessageChange={onMessageChange}
                     addMessage={addMessage}
                     dialogs={props.store.getState().dialogsPage.dialogs}
                     messages={props.store.getState().dialogsPage.messages}
                     newMessageBody={props.store.getState().dialogsPage.newMessageBody}

    />);
}

export default DialogsContainer;

