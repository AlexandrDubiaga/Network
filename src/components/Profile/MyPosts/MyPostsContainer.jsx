import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {compose} from "redux";
import {connect} from "react-redux";



let mapStateToProps = (state)=>{
    return{
        profilePage:state.profilePage
    }
}

export default compose(connect(mapStateToProps,{addPostActionCreator}))(MyPosts)
