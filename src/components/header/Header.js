import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <header>
      <ul className='Header'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </header>
  );
}