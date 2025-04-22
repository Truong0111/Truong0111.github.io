import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-page">
            <h1>About Scary Page</h1>

            <section className="about-section">
                <h2>Introduce</h2>
                <p>
                    Scary Page is a platform showcasing my game projects developed with the Unity Engine.
                </p>
            </section>

            <section className="about-section">
                <h2>Contact</h2>
                <ul className="contact-info">
                    <li>Email: truongquangtruong123@gmail.com</li>
                    <li>GitHub: <a href="https://github.com/Truong0111" target="_blank"
                                   rel="noopener noreferrer">github.com/Truong0111</a></li>
                </ul>
            </section>
        </div>
    );
}

export default AboutPage;