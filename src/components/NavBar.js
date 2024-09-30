import React from 'react';
import EventMateLogo from '../assets/images/EventMateLogo.png'; // Adjust the path based on your directory structure

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/"><img src={EventMateLogo} className="nav-icon" alt="EventMate Logo" /></a>
      </div>
      <ul className="nav-links">
        <li className="nav-item"><a href="/catering">Catering</a></li>
        <li className="nav-item"><a href="/venues">Venues</a></li>
        <li className="nav-item"><a href="/mobiliario">Mobiliario</a></li>
        <li className="nav-item"><a href="/planeador">Planeador</a></li>
        <li className="nav-item"><a href="/login">Login</a></li>
        <li className="nav-item"><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;