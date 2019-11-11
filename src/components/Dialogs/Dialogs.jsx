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

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Alex" id="1"/>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Solmir__</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Hworang</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Paul</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/5">Messi</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>I winnig incubator</div>
                <div className={style.message}>React</div>
                <div className={style.message}>Redux</div>
                <div className={style.message}>Flux</div>

            </div>

        </div>
    );
}

export default Dialogs;
