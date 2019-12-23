import React from 'react';
import style from './Profile.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from '../../redux/profileReducer'
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userIdFromWithRouterParams = this.props.match.params.userId;

        if (!userIdFromWithRouterParams) {
            userIdFromWithRouterParams = 2;
        }
        profileAPI.getUsersProfile(userIdFromWithRouterParams).then(response => {
                this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter
)(ProfileContainer);
