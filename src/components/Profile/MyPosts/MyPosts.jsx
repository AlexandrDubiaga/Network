import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = props => {
    let postsElements = props.store._state.profilePage.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    let newPostRef = React.createRef();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostRef.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={style.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostRef} onChange={onPostChange}
                              value={props.store._state.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
