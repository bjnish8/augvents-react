import React from 'react';
import './styles/header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-block">
            <ul className="header links-list">
                    <li>
                        Home
                    </li>
                    <li> more </li>

            </ul>
            <ul className="header links-list">
                    <li> sign up </li>
                    <li>  login </li>
            </ul>

        </div>
    );
}

export default Header;