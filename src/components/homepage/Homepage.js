import React, { Component } from 'react';
import './Homepage.css';
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

class Homepage extends Component {
  render() {
    return (
      <div class="container" id="home">
        <div className="section hero">
          <div className="row">
            <div>
              <h1>Wendy Gonzalez</h1>
              <h2>Software Developer</h2>
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
        <Projects />
        <Contact />
      </div>
    );
  }
}
export default Homepage;
