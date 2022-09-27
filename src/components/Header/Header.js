import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <h1>Good Food!</h1>

        </div>
    );
};

export default Header;