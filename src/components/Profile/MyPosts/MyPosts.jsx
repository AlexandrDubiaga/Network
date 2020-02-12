import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";
import AddNewPostForm from "./Posts/AddNewPostForm/AddNewPostForm";



const MyPosts = props => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    let addPost = (newPost) => {
        props.addPostActionCreator(newPost.text);
    }

    return (
        <div className={style.postBlock}>
            <h3>My Posts</h3>
            <div>
            <AddNewPostForm onSubmit={addPost} />
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
