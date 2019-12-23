import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import axios from 'axios';
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setCurrentPage,
    setTotalCountUsersAC,
    setIsFetching
} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.countUsersOnCurrentPage).then(data => {
            this.props.setUsersAC(data.items);
            this.props.setTotalCountUsersAC(data.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.countUsersOnCurrentPage).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsersAC(data.items);
        })
    }
    onFollow = (userId) => {
        this.props.setIsFetching(true)
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                this.props.setIsFetching(false)
                this.props.followAC(userId);
            }
        })
    }
    onUnfollow = (userId) => {
        this.props.setIsFetching(true)
        usersAPI.unFollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                this.props.setIsFetching(false)
                this.props.unfollowAC(userId);
            }
        })
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users isFetching={this.props.isFetching} countUsersOnCurrentPage={this.props.countUsersOnCurrentPage}
               onPageChanged={this.onPageChanged}
               usersCountFromServer={this.props.usersCountFromServer} users={this.props.users}
               currentPage={this.props.currentPage}
               onFollow={this.onFollow} onUnfollow={this.onUnfollow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsersOnCurrentPage: state.usersPage.countUsersOnCurrentPage,
        usersCountFromServer: state.usersPage.usersCountFromServer,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
export default compose(connect(mapStateToProps, {
    setCurrentPage,
    setIsFetching,
    setTotalCountUsersAC,
    followAC,
    unfollowAC,
    setUsersAC
}))(UsersContainer);

