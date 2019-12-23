import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import axios from 'axios';
import Header from "./Header";
import {setUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount(){
        let authData = authAPI.authUser().then(response => {
           if(response.data.resultCode===0){
               let {id,email,login} = response.data.data
               this.props.setUserDataAC(id,email,login)
           }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth:state.auth.isAuth
    }
}
export default compose(connect(mapStateToProps, {setUserDataAC}))(HeaderContainer);

