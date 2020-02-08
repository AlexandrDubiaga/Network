import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import AddLoginForm from "./AddLoginForm/AddLoginForm";
import {loginUser} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";



const LoginContainer = props => {
    let loginData = (data) => {
        debugger
        props.loginUser(data)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <AddLoginForm capcha={props.capcha} onSubmit={loginData}/>
    );

}
let mapStateToProps = state => (
    {
        isAuth: state.auth.isAuth,
        capcha:state.auth.capcha

    }
)

export default compose(
    connect(mapStateToProps, {loginUser}),
)(LoginContainer);
