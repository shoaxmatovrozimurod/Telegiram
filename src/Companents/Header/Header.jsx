import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <a className='header__link-logo' href="#"><h1 className='header__logo'>Telegraph</h1></a>
                <button className='header__btn'>Try Beta</button>
            </div>
        </div>
    </header>
  )
}
