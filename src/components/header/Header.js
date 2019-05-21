import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import logo from "../Header/wendyg.png";

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
        <p className="logo" onClick={() => scrollElement("#home")} to="/#home">
          Wendy Gonzalez{/* <img src={logo}/> */}
        </p>
        <ul className="menu">
          <li>
            <NavLink onClick={() => scrollElement("#projects")} to="/#projects">
              Projects
            </NavLink>
          </li>
          <li>
            <a href="https://github.com/wensug" target="_blank">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wendygonzalezcriollo/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
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
