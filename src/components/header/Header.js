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
      <div className="nav">
        <p className="logo">Wensug</p>
        <ul className="menu">
          <li><NavLink onClick={() => scrollElement('#home')} to='/#home'>Home</NavLink></li>
          <li><NavLink onClick={() => scrollElement('#about')} to='/#about'>About</NavLink></li>
          <li><NavLink onClick={() => scrollElement('#projects')} to='/#projects'>Projects</NavLink></li>
          <li><NavLink onClick={() => scrollElement('#contact')} to='/#contact'>Contact</NavLink></li>
        </ul>
      </div>
    </header>
  );
}

    {/* <div className='footer-media'>
            <a href='https://github.com/wensug'><i className="fab fa-github"></i></a>
            <a href='https://www.linkedin.com/in/wendygonzalezcriollo/'><i className="fab fa-linkedin"></i></a>
            <a href='https://twitter.com/wendygoncriollo'><i className="fab fa-twitter"></i></a>
            </div> */}