import React from 'react';

import ChattifyLogo from '../../assets/chattifyLogoSVGComponent';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar__nav-predecessor'>
        <div className='nav-predecessor__nav-bar'>
            <div className='nav-bar__chattify-logo-and-title-container'>
                <ChattifyLogo width={ 130 } height={ 80 }/>
                <span className='chattify-logo-and-title-container__title'>
                    Chattify
                </span>
            </div>
            <nav className='nav-bar__nav'>
                <button className='nav__button'>
                    About
                </button>
                <button className='nav__button'>
                    Chats
                </button>
                <button className='nav__button'>
                    Login
                </button>   
            </nav>
        </div>
    </div>
  )
}

export default Navbar;