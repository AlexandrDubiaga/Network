import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts dispatch={props.dispatch} profilePage={props.profilePage} />
        </div>
    );
}

export default Profile;
