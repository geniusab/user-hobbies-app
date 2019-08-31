import React from 'react';
import './styles.scss'


const Header = () => {
    const d = new Date(1933, 3, 21).toLocaleString();
    return <header id="header">
        User Hobbies
        <div>{d}</div>
    </header>
}

export default Header