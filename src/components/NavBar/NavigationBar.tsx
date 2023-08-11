// NavigationBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
