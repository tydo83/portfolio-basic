import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
    <div>
        <header className="App-header">
            <NavLink to = "/" className="App-header-link"> 
                <h1>Code Monkey in New York</h1>
            </NavLink>
        </header>
    </div>
    );
}
