import React from 'react';
import './Header.css';

interface Props {
    greeting: string;
    user: string;
}

function Header({greeting, user}: Props) {
    
    return (
        <header className="Header">
            <h1>Ice Cream Wars</h1>
            <p>{greeting}{user}</p>
        </header>
    )
        
}
export default Header;