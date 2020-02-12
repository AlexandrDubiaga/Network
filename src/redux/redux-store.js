import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReduce";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer,
    form: formReducer
})


let store = createStore(reducers,applyMiddleware(thunk));
export default store;