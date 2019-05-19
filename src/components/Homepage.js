import React, { Component } from "react";
import "./Header/Header.css";
import "./Homepage.css";
import Projects from "./Projects";
import Contact from "./Contact";

class Homepage extends Component {
  render() {
    return (
      <div class="container" id="home">
        <div className="section hero">
          <div className="row">
            <div>
              <h1>I'm Wendy a Frontend Developer</h1>
              <h2>I'm Wendy a Frontend Developer</h2>
              <p className="tags">
                <div>
                  <span className="tag">
                    <i className="fab fa-js-square" />
                    <b>JavaScript</b>
                  </span>
                </div>
                <div>
                  <span className="tag">
                    <i className="fab fa-react" />
                    <b>React</b>
                  </span>
                </div>
                <div>
                  <span className="tag">
                    <i className="fab fa-node" />
                    <b>Node js</b>
                  </span>
                </div>
              </p>
              <p className="tags">
                <div>
                  <span className="tag">
                    <i className="fab fa-html5" />
                    <b>HTML5</b>
                  </span>
                </div>
                <div>
                  <span className="tag">
                    <i className="fab fa-css3-alt" />
                    <b>CCS3</b>
                  </span>
                </div>
                <div>
                  <span className="tag">
                    <i className="fas fa-database" />
                    <b>MongoDB</b>
                  </span>
                </div>
                <div>
                  <span className="tag">
                    <i className="fab fa-python" />
                    <b>Python</b>
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="section projects" id="projects">
          <div className="row">
            <h3 className="row-title">Projects</h3>
            <div class="card-container">
              <div className="card">
                <div className="card-image">
                  <img src="http://placekitten.com/200/300" />
                </div>
                <div className="card-text">
                  <h4>I'm Wendy a Frontend Developer</h4>
                  <p>ghfhgfhgfh</p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img src="http://placekitten.com/200/300" />
                </div>
                <div className="card-text">
                  <h4>I'm Wendy a Frontend Developer</h4>
                  <p>ghfhgfhgfh</p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <img src="http://placekitten.com/200/300" />
                </div>
                <div className="card-text">
                  <h4>I'm Wendy a Frontend Developer</h4>
                  <p>ghfhgfhgfh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
        {/* <Projects />
        <Contact /> */}
      </div>
    );
  }
}
export default Homepage;
