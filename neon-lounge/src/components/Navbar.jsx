import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="logo">Neon Lounge</div>
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        &#9776;
      </button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
