import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import AddLoginForm from "./AddLoginForm/AddLoginForm";
import {loginUser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";



const LoginContainer = props => {

    let loginData = (data) => {
        props.loginUser(data)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <AddLoginForm onSubmit={loginData}/>
    );

}
let mapStateToProps = state => (
    {isAuth: state.auth.isAuth}
)

export default compose(
    connect(mapStateToProps, {loginUser}),
)(LoginContainer);
