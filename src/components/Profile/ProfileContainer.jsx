import React from 'react';
import style from './Profile.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profileReducer'
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userIdFromWithRouterParams = this.props.match.params.userId;

        if (!userIdFromWithRouterParams) {
            userIdFromWithRouterParams = 1418;
        }
        this.props.getUserStatus(userIdFromWithRouterParams)
        this.props.getUserProfile(userIdFromWithRouterParams);
    }

    render() {

        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile,
        status: state.profilePage.status,
        userId: state.auth.id,
        isAuth: state.auth.isAuth

    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
