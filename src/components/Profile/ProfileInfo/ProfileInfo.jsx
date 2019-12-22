import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
const ProfileInfo = props => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.small} />
                <div>Имя: {props.profile.fullName}</div>
                <div>Ид: {props.profile.userId}</div>
                <div>About me: {props.profile.aboutMe}</div>
                <div>Ищу работу: {props.profile.lookingForAJob?'Да':'Нет'}</div>
                <div>Описание работы: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;


