import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";

class UsersContainer extends React.Component{
    render(){
        return(
            <div>
                <Users />
            </div>
        )
    }
}

export default compose(connect(null, {}))(UsersContainer);

