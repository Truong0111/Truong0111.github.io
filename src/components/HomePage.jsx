import React from 'react';
import { Link } from 'react-router-dom';
import GamesList from './GamesList';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Welcome to Scary Games Collection</h1>
            </div>

            <section className="featured-section">
                <h2>Featured Games</h2>
                <GamesList featured={true} />
            </section>

            <section className="all-games-section">
                <h2>All Games</h2>
                <GamesList />
            </section>
        </div>
    );
}

export default HomePage;