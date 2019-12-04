import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";

class UsersContainer extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Users users={this.props.users} followAC={this.props.followAC} unfollowAC={this.props.unfollowAC}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
export default compose(connect(mapStateToProps, {followAC, unfollowAC, setUsersAC}))(UsersContainer);

