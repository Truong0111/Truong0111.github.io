import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import AboutPage from './components/AboutPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router basename="/">
            <div className="app-container">
                <Navigation />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/game/:gamePath" element={<GamePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;