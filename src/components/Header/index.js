import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../tim_logo.svg';

function Header(props) {
    return (
        <header>
            <Link to="/">
                <img src={logo} className="logo" alt="TIM" />
            </Link>
        </header>
    );
  }
   
  export default Header;