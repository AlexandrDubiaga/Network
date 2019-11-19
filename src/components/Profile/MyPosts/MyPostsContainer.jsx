import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const MyPostsContainer = props => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (<MyPosts onPostChange={onPostChange} addPost={addPost} posts={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText} />);
}

export default MyPostsContainer;
