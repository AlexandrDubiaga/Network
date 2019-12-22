import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


class Profile extends React.Component {
    render() {
        return (
            <div className={style.content}>
                <ProfileInfo {...this.props} />
                <MyPostsContainer  />
            </div>
        );
    }

}

export default Profile
