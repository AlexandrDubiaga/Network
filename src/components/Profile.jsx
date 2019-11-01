import React from 'react';
import './Profile.css';


const Profile = () => {
    return (
        <div className="content">
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
                <div className="posts">
                    <div className="item">Post 1</div>
                    <div className="item">Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
