import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = props => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = props => {
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <div>{props.message}</div>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Solmir__" id="2"/>
                <DialogItem name="Hworang" id="3"/>
                <DialogItem name="Paul" id="4"/>
                <DialogItem name="Messi" id="5"/>

            </div>
            <div className={style.messages}>
                <Message message="I winnig incubator"/>
                <Message message="React"/>
                <Message message="Redux"/>
                <Message message="Flux"/>
            </div>

        </div>
    );
}

export default Dialogs;
