import React, { Component } from 'react';
import photo_1 from '../images/wendygonzalez.jpg'
import './Homepage.css'
import Projects from './Projects';
import About from './About';
import Contact from './Contact'


class Homepage extends Component {
    
    render() {
        return (
            <div className='Homepage' id='home'>
                <div className='container'>
                    <h1>I'm Wendy a Frontend Developer</h1>
                    <div className='item'>
                        <img src={photo_1} alt='wendy' />
                    </div>
                </div>
                <About />
                <Projects/>
                <Contact/>
            </div>
        );
    }
}
export default Homepage;