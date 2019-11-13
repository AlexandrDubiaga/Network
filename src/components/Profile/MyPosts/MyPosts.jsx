import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = props => {

    let postsElements = props.state.profilePage.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    let newPostRef = React.createRef();
    let addPost = () => {
        let text = newPostRef.current.value;
        props.addPost();
        newPostRef.current.value='';
    }
    return (
        <div className={style.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostRef} value={props.newPostText} />
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
