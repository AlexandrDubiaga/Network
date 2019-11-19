import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {compose} from "redux";
import {connect} from "react-redux";



let mapStateToProps = (state)=>{
    return{
        profilePage:state.profilePage
    }
}

export default compose(connect(mapStateToProps,{addPostActionCreator, updateNewPostTextActionCreator}))(MyPosts)
