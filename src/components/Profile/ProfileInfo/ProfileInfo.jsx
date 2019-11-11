import React from 'react';
import style from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;


