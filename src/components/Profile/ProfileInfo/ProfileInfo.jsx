import React from 'react';
import style from './ProfileInfo.module.css';
const ProfileInfo = props => {

    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                <div>About me: {props.profile.aboutMe}</div>
                <div>Ищу работу: {props.profile.lookingForAJob?'Да':'Нет'}</div>

            </div>
        </div>
    );
}

export default ProfileInfo;


