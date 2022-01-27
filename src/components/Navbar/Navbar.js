import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <div>
      <ul className='navbar-link'>
        <Link to='/about'><li>about</li></Link>
        <Link to='/projects'><li>projects</li></Link>
        <Link to='/contact'><li>contact</li></Link>
      </ul>
  </div>;
};

export default Navbar;
