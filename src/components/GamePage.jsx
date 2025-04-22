import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gamesData } from '@/data/gamesData';
import UnityGame from './UnityGame';
import '../styles/GamePage.css';

function GamePage() {
    const { gamePath } = useParams();
    const game = gamesData.find(g => g.path === gamePath);

    if (!game) {
        return (
            <div className="not-found">
                <h2>The game does not exist</h2>
                <p>The game you requested was not found.</p>
                <Link to="/" className="back-link">Return to homepage</Link>
            </div>
        );
    }

    return (
        <div className="game-page">
            <div className="game-header">
                <h1>{game.name}</h1>
                <Link to="/" className="back-link">« Back to game list</Link>
            </div>

            <div className="game-container">
                <UnityGame gamePath={game.path} />
            </div>

            <div className="game-details">
                <div className="game-description">
                    <h2>Description</h2>
                    <p>{game.fullDescription}</p>
                </div>

                <div className="game-instructions">
                    <h2>Instructions</h2>
                    <p>{game.instructions}</p>
                </div>
            </div>
        </div>
    );
}

export default GamePage;