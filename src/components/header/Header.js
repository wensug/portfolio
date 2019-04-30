import React from 'react';
import logo from '../header/logo.svg';
import '../header/Header.css'

export default function Header() {
  return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <p>
          Wendy Gonzalez
        </p>
        <a
          className="Header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  );
}