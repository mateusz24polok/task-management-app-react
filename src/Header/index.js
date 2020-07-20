import React from 'react';
import './style.css';

const Header = ({title}) => (
    <header className="header">
        <h1 className="appTitle">{title}</h1>
    </header>
);

export default Header;