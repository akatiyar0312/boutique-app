// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './TopBar';
import Blouses from './Blouses';
import SalwarSuits from './SalwarSuits';
import Sections from './Sections';

function App() {
    return (
        <Router>
            <div className="App">
                <TopBar />
                <Sections/>
                <Routes>
                    <Route path="/blouses" element={<Blouses />} />
                    <Route path="/salwar-suits" element={<SalwarSuits />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;