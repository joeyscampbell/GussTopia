import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="social">
      <a href="https://discord.com" aria-label="Discord" target="_blank" rel="noopener noreferrer">Discord</a>
      <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <p>&copy; {new Date().getFullYear()} Neon Lounge</p>
  </footer>
);

export default Footer;
