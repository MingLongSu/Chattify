import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChattifyLogo from '../../assets/chattifyLogoSVGComponent';
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOnAbout, setIsOnAbout] = useState(window.location.pathname === '/about');
    const [isOnChats, setIsOnChats] = useState(window.location.pathname === '/chat');
    const [isOnLogin, setIsOnLogin] = useState(window.location.pathname === '/');

    // navigates to a particular page based on the button's described location
    const navigatePages = (e) => { 
        let pageName = e.target.innerHTML.toLowerCase();
        pageName = (pageName === 'login' ? '' : pageName);
        navigate(`/${ pageName }`);

        if (pageName === 'about') { 
            setIsOnAbout(true);
            setIsOnChats(false);
            setIsOnLogin(false);
        }
        else if (pageName === 'chats') { 
            setIsOnAbout(false);
            setIsOnChats(true);
            setIsOnLogin(false);
        }
        else if (pageName === '') { 
            setIsOnAbout(false);
            setIsOnChats(false);
            setIsOnLogin(true);
        }
    }

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
                    <button onClick={ navigatePages } className={ 'nav__button' + (isOnAbout ? ' active' : '') }>
                        About
                    </button>
                    <button onClick={ navigatePages } className={ 'nav__button' + (isOnChats ? ' active' : '') }>
                        Chats
                    </button>
                    <button onClick={ navigatePages } className={ 'nav__button' + (isOnLogin ? ' active' : '') }>
                        Login
                    </button>   
                </nav>
            </div>
        </div>
  )
}

export default Navbar;