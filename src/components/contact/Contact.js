import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="section contact" id="contact">
      <div className="row">
        <div className="description">
          <h3>Contact</h3>
          <a href="mailto:wensug@gmail.com" class="button">
            Send me an email
          </a>
          <div className="nav">
            <ul className="menu">
              <li>
                <a
                  className="social-media"
                  href="https://github.com/wensug"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  className="social-media"
                  href="https://www.linkedin.com/in/wendygonzalezcriollo/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  className="social-media"
                  href="https://twitter.com/wendygoncriollo"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
