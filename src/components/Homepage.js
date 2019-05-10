import React, { Component } from 'react';
import './Homepage.css'
import Projects from './Projects';
import About from './About';
import Contact from './Contact'


class Homepage extends Component {
    
    render() {
        return (
            <div className='Homepage' id='home'>
                <div className='Homepage-container'>
                    {/* <h1>I'm Wendy a Frontend Developer</h1> */}
                </div>
                <About />
                <Projects />
                <Contact />
            </div>
        );
    }
}
export default Homepage;