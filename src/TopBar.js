// src/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="dropdown">
                <Link to="/blouses" className="dropbtn">Blouses</Link>
                <div className="dropdown-content">
                    <Link to="/blouses/v-neck">V Neck</Link>
                    <Link to="/blouses/round-neck">Round Neck</Link>
                    <Link to="/blouses/collar-neck">Collar Neck</Link>
                </div>
            </div>
            <Link to="/salwar-suits">Salwar Suits</Link>
            <Link to="/design">Design</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/help">Help</Link>
        </div>
    );
};

export default TopBar;