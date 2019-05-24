import React from "react";
import "./Projects.css";
import carru from "../../images/242.jpg";
import kodflix from "../../images/sing.jpg";
import moodslider from "../../images/18900.jpg";

export default function Projects() {
  return (
    <div className="section projects" id="projects">
      <div className="row">
        <h3 className="row-title">Projects</h3>
        <div class="card-container">
          <div className="card">
            <div className="card-image">
              <a
                href="https://carru.herokuapp.com/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={carru} alt="CarrU" />
              </a>
            </div>
            <div className="card-text">
              <h4>CarrU</h4>
              <p> Share your car and help save the planet!</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a
                href="https://kodflix-wendy.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={kodflix} alt="Kodflix" />
              </a>
            </div>
            <div className="card-text">
              <h4>Kodflix</h4>
              <p>A full stack project simulating the production of Netflix</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href="https://github.com/wensug" target="_blank" rel="noopener noreferrer">
                <img src={moodslider} alt="Moodslider" />
              </a>
            </div>
            <div className="card-text">
              <h4>Moodslider</h4>
              <p> Project that recommends movies based on your mood </p>
              {/* <p> Technologies: JS, Python, CSS and HTML</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
