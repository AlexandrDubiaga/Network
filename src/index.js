import React from 'react';
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";
import {rerender} from "./render";
import state from "./redux/state";


rerender(state);