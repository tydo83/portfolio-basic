import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <div>
            <header className="header">
                {   
                    matches &&
                    <NavLink to="/" className="header-title">
                        <h1>Code Monkey in New York</h1>
                    </NavLink>
                }
                {
                    !matches &&
                    <NavLink to="/" className="header-title">
                        <h1>Code Monkey<br />New York</h1>
                    </NavLink>
                }

            </header>
        </div>
    );
}
