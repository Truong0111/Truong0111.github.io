import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
    return (
        <nav className="main-navigation">
            <ul className="nav-links">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;