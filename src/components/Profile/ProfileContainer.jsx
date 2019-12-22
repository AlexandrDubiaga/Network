import React from 'react';
import style from './Profile.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from '../../redux/profileReducer'
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.instance = axios.create({
            withCredentials: true,
            baseURL: "https://social-network.samuraijs.com/api/1.0/",
            headers: {"API-KEY": "7c2b1d62-7561-4a6d-a49c-4ca6890f67a4"}

        });
        let userIdFromWithRouterParams = this.props.match.params.userId;

        if (!userIdFromWithRouterParams) {
            userIdFromWithRouterParams = 2;
        }
        let user = this.instance.get(`profile/${userIdFromWithRouterParams}`);
        user.then(response => {
            this.props.setUserProfile(response.data);
        })
    }

render()
{
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
