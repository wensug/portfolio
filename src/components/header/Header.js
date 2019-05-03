import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function scrollElement(id) {
  console.log(id)
  document.querySelector(id).scrollIntoView ( {
  behavior: 'smooth'
 });
}

export default function Header() {
  return (
    <header>
      <ul className='Header'>
        <li><NavLink to='/#home'>Home</NavLink></li>
        <li><NavLink onClick={() => scrollElement('#about')} to='/#about'>About</NavLink></li>
        <li><NavLink onClick={() => scrollElement('#projects')}to='/#projects'>Projects</NavLink></li>
        <li><NavLink onClick={() => scrollElement('#contact')}to='/#contact'>Contact</NavLink></li>
      </ul>
    </header>
  );
}