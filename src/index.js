import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [{id: 1, message: "Hi im new Post", likesCount: 2}, {
    id: 2,
    message: "Its my first Post",
    likesCount: 15
}]
const dialogs = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Solmir__"},
    {id: 3, name: "Hworang"},
    {id: 4, name: "Paul"},
    {id: 5, name: "Messi"}
]

const messages = [
    {id: 1, message: "I winnig incubator"},
    {id: 2, message: "React"},
    {id: 3, message: "Redux"},
    {id: 4, message: "Flux"}
]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
