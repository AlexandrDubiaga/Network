import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <a href="#" className="item">Profile</a>
            </div>
            <div>
                <a href="#" className="item"> Messages</a>
            </div>
            <div>
                <a href="#" className="item"> News</a>
            </div>
            <div>
                <a href="#" className="item">Music</a>
            </div>
            <div>
                <a href="#" className="item">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
