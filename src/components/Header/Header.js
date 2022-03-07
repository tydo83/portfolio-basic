import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
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
                        <Typography variant="h2">
                            <strong>Code Monkey in New York</strong>
                        </Typography>
                    </NavLink>
                }
                {
                    !matches &&
                    <NavLink to="/" className="header-title">
                        <Typography variant="h2">
                            <b>Code Monkey New York</b>
                        </Typography>
                    </NavLink>
                }
            </header>
        </div>
    );
}
