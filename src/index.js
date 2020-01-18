import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InitiallApp from './InitiallApp';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/redux-store';



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <InitiallApp />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
