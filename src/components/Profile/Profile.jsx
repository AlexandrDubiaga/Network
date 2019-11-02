import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg"/>
            </div>
            <div>
                ava+description
            </div>
           <MyPosts />
        </div>
    );
}

export default Profile;
