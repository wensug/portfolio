import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className='section' id='about'>
            <div className='About'>
                <div className='About-text'></div>
                <h1>About Me</h1>
                <p> I'm Wendy a Frontend Developer, looking for a JS/React developer position in order to resume my coding experience, aiming at developing software solutions as a software engineer. </p>
            </div>
            <div className='About-box'>
                <h1>Skills</h1>
                <div>
                    <ul>
                        <li><i className="fab fa-js-square"></i></li>
                        <li><i className="fab fa-react"></i></li>
                        <li><i className="fab fa-node"></i></li>
                        <li><i className="fab fa-html5"></i></li>
                        <li><i className="fab fa-css3-alt"></i></li>
                        <li><i className="fas fa-database"></i></li>
                        <li><i className="fab fa-python"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}