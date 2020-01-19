import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../redux/authReducer";


const Header = props => {
    return (
        <header className={style.header}>
            <img src="https://yeremenko.ua/catalog/city/parizh/parizh_4.jpg"/>
            <div className={style.loginBlock}>
                {props.isAuth ? <span className={style.login}>{ props.login}<button onClick={props.logoutUser}>Выйти</button></span> :
                    <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
