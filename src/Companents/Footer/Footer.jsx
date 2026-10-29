import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__container">
                <p className='footer__text'>© Telegraph. 2020 — All rights reserved.</p>
                <ul className='footer__list'>
                    <li className='footer__item'> <a className='footer__item-link' href="#">Telegiram</a> </li>
                    <li className='footer__item'> <a className='footer__item-link' href="#">Linkedin</a> </li>
                    <li className='footer__item'> <a className='footer__item-link' href="#">YouTube</a> </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer