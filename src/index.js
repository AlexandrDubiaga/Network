import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, subscribe, updateNewPostText} from "./redux/state";
import store from "./redux/state";


let rerender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/> </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender(store.getState());
store.subscribe(rerender);