import React from 'react';
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Scary Page. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Truong0111" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.facebook.com/boy0111.1999" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;