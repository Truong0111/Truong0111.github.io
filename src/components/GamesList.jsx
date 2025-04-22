import React from 'react';
import { Link } from 'react-router-dom';
import { gamesData } from '@/data/gamesData';
import '../styles/GamesList.css';

function GamesList({ featured = false }) {
    const games = featured
        ? gamesData.filter(game => game.featured)
        : gamesData;

    return (
        <div className="games-grid">
            {games.map(game => (
                <div key={game.id} className="game-card">
                    <div className="game-thumbnail">
                        <img src={`/images/${game.thumbnail}`} alt={game.name} />
                    </div>
                    <div className="game-info">
                        <h3>{game.name}</h3>
                        <p>{game.shortDescription}</p>
                        <Link to={`/game/${game.path}`} className="play-button">Play</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GamesList;