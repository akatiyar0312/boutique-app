// src/Sections.js
import React from 'react';
import './Sections.css';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section">
                <h2>What's Trending</h2>
                <p>Content for what's trending.</p>
            </div>
            <div className="section">
                <h2>Your Top Searches</h2>
                <p>Content for your top searches.</p>
            </div>
            <div className="section">
                <h2>Recommendations</h2>
                <p>Content for recommendations.</p>
            </div>
        </div>
    );
};

export default Sections;