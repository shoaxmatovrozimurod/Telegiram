import React, { useState } from 'react';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <div className="container">
        <div className="header__container">
          <a className='header__link-logo' href="#">
            <h1 className='header__logo'>Telegraph</h1>
          </a>

          {/* Menyu qismi */}
          <div className={`header__menu ${isMenuOpen ? 'active' : ''}`}>
            <button className='header__btn'>Try Beta</button>
          </div>

          <div 
            className={`header__burger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};