import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg"/>
            </header>
            <nav  className="nav">
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
            </nav>
            <div  className="content">
                Main Content
            </div>
        </div>
    );
}

export default App;
