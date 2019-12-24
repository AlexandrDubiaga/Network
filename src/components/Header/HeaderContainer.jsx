import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import axios from 'axios';
import Header from "./Header";
import {authMe} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
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
        isAuth: state.auth.isAuth
    }
}
export default compose(connect(mapStateToProps, {authMe}))(HeaderContainer);

