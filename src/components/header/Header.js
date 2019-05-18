import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function scrollElement(id) {
  console.log(id);
  document.querySelector(id).scrollIntoView({
    behavior: "smooth"
  });
}

export default function Header() {
  return (
    <header>
      <div className="nav">
        <p className="logo" onClick={() => scrollElement("#home")} to="/#home">Wensug</p>
        <ul className="menu">
          <li>
            <NavLink onClick={() => scrollElement("#about")} to="/#about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollElement("#projects")} to="/#projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollElement("#projects")} to="/#projects">
            <i className="fab fa-github"></i>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => scrollElement("#projects")} to="/#projects">
            <i className="fab fa-linkedin"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="button-xs"
              onClick={() => scrollElement("#contact")}
              to="/#contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
