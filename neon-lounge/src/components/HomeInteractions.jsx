import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundEffect from './BackgroundEffect';
import './HomeInteractions.css';

const HomeInteractions = () => (
  <section className="home-interactions" data-aos="fade-up">
    <BackgroundEffect />
    <h1>Welcome to the Neon Lounge</h1>
    <button aria-label="Explore" className="enter-button">Enter</button>
    <div className="quick-links">
      <Link to="/games">Games</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/music">Music</Link>
    </div>
  </section>
);

export default HomeInteractions;
