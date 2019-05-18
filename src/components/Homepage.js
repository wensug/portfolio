import React, { Component } from 'react';
import './Homepage.css';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';


class Homepage extends Component {

    render() {
        return (
            <div class="container" id="home">
                <div className="section hero">
                    <div className="row">
                        <div className="description">
                            <h1>I'm Wendy a Frontend Developer</h1>
                            <h2>I'm Wendy a Frontend Developer</h2>
                        </div>
                    </div>
                </div>

                <div className="section projects">
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

                <div className="section contact">
                    <div className="row">
                        <div className="description">
                            <h3>Contact</h3>
                            <a href="#" class="button">Contact</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Homepage;