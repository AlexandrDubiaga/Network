import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Post
            </div>
            <Post message="Hi im new Post"/>
            <Post message="Its my first Post"/>
        </div>
    );
}

export default MyPosts;
