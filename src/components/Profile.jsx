import React from 'react';
import style from './Profile.module.css';


const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg"/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>Post 1</div>
                    <div className={style.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
