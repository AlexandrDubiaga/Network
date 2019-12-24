import React from 'react';
import style from './Profile.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from '../../redux/profileReducer'
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userIdFromWithRouterParams = this.props.match.params.userId;

        if (!userIdFromWithRouterParams) {
            userIdFromWithRouterParams = 2;
        }
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
        profile: state.profilePage.userProfile
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer);
