import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setUsersAC([{
            id: 1,
            fullName: 'Alex',
            followed: false,
            status: 'Im boss',
            location: {city: 'Mycolaiv', country: 'Ukraine'}
        },
            {
                id: 2,
                fullName: 'Lena',
                followed: false,
                status: 'Im sister',
                location: {city: 'Herson', country: 'Franch'}
            },
            {
                id: 3,
                fullName: 'Luda',
                followed: false,
                status: 'Im woman',
                location: {city: 'Harkov', country: 'Kongo'}
            },
            {
                id: 4,
                fullName: 'Hworang',
                followed: false,
                status: 'Im champ',
                location: {city: 'Odessa', country: 'USA'}
            }])
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

