import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import axios from 'axios';
import Header from "./Header";
import {setUserDataAC} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount(){
        this.instance = axios.create({
            withCredentials: true,
            baseURL: "https://social-network.samuraijs.com/api/1.0/",
            headers: {"API-KEY": "7c2b1d62-7561-4a6d-a49c-4ca6890f67a4"}

        });
        let authData = this.instance.get(`auth/me`).then(response => {
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

