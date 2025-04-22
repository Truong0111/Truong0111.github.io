import React, { useEffect, useState } from 'react';
import '../styles/UnityGame.css';

function UnityGame({ gamePath }) {
    const [loading, setLoading] = useState(true);
    const iframeSrc = `${import.meta.env.BASE_URL}game/${gamePath}/index.html`;

    return (
        <div className="unity-game-wrapper">
            {loading && (
                <div className="game-loading">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            )}

            <iframe
                className={loading ? 'hidden' : ''}
                src={iframeSrc}
                title={`Unity Game - ${gamePath}`}
                width="100%"
                height="640"
                allowFullScreen
                onLoad={() => setLoading(false)}
            />
        </div>
    );
}

export default UnityGame;