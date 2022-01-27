import React from 'react';
import './navbar.css'

const Navbar = () => {
  return <div>
      <ul className='navbar-link'>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
  </div>;
};

export default Navbar;
