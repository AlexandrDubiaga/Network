import React from 'react';
import style from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Message = props => {
    debugger
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <div>{props.message}</div>
        </div>
    )
}


export default Message;

