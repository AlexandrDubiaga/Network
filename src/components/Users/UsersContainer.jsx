import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import axios from 'axios';
import {followAC, setUsersAC, unfollowAC,setCurrentPage,setTotalCountUsersAC,setIsFetching} from "../../redux/UsersReducer";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
       this.instance = axios.create({
            withCredentials: true,
            baseURL: "https://social-network.samuraijs.com/api/1.0/",
            headers: {"API-KEY": "7c2b1d62-7561-4a6d-a49c-4ca6890f67a4"}

        });
        let users = this.instance.get(`users?page=${this.props.currentPage}&count=${this.props.countUsersOnCurrentPage}`);
        users.then(response => {
            this.props.setUsersAC(response.data.items);
            this.props.setTotalCountUsersAC(response.data.totalCount)
        })

    }
    onPageChanged=(page)=>{
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        let users = this.instance.get(`users?page=${page}&count=${this.props.countUsersOnCurrentPage}`);
        users.then(response => {
            this.props.setIsFetching(false)
            this.props.setUsersAC(response.data.items);
        })

    }

    render() {
        return <>
        {this.props.isFetching?<Preloader/>:null}
            <div>
                <Users countUsersOnCurrentPage={this.props.countUsersOnCurrentPage} onPageChanged={this.onPageChanged}
                       usersCountFromServer={this.props.usersCountFromServer} users={this.props.users} currentPage={this.props.currentPage}
                       followAC={this.props.followAC} unfollowAC={this.props.unfollowAC}/>
            </div>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countUsersOnCurrentPage: state.usersPage.countUsersOnCurrentPage,
        usersCountFromServer: state.usersPage.usersCountFromServer,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}
export default compose(connect(mapStateToProps, {setCurrentPage,setIsFetching,setTotalCountUsersAC, followAC, unfollowAC, setUsersAC}))(UsersContainer);

