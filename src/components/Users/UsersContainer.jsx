import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import {
    follow,
    getUsers, unfollow, pageChanged
} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countUsersOnCurrentPage);
    }

    onPageChanged = (page) => {
        this.props.pageChanged(page,this.props.countUsersOnCurrentPage)
    }
    onFollow = (userId) => {
        this.props.follow(userId)
    }
    onUnfollow = (userId) => {
        this.props.unfollow(userId)
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users followingInProgress={this.props.followingInProgress}
               countUsersOnCurrentPage={this.props.countUsersOnCurrentPage}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose(connect(mapStateToProps, {
    follow, unfollow,
    getUsers, pageChanged
}))(UsersContainer);

