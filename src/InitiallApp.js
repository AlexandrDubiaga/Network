import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/AddLoginForm/AddLoginForm";
import {connect} from "react-redux";
import {compose} from "redux";
import {authMe} from "./redux/authReducer";
import {initializedAppThunkCreator} from "./redux/appReduce";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/common/Preloader";


class InitiallApp extends React.Component {
    componentDidMount() {
        this.props.initializedAppThunkCreator();
    }

    render() {
        if(!this.props.initiallAuth){
            return <Preloader/>
        }
        return (
            <App />
        );
    }
}

let mapStateToProps=(state)=>{
    return{
        initiallAuth:state.app.initiallAuth
    }
}
export default compose(
    connect(mapStateToProps, {initializedAppThunkCreator})
)(InitiallApp);


export class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer  />}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }

}
