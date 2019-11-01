import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg"/>
            </header>
            <nav className="nav">
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#"> Messages</a>
                </div>
                <div>
                    <a href="#"> News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg"/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My Posts
                    <div>
                        New Post
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
