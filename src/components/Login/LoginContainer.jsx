import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {loginUser} from "../../redux/authReducer";


class LoginContainer extends React.Component {
    componentDidMount() {
    }
    loginData=(data)=>{
        this.props.loginUser(data)
    }
    render() {
        return (
           <Login onSubmit={this.loginData} />
        );
    }
}

export default compose(
    connect(null, {loginUser})
)(LoginContainer);
