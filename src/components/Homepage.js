import React from 'react';
import photo_1 from '../images/wendygonzalez.jpg'
import './Homepage.css'
export default function Homepage() {
    return (
        <div className='Homepage'>
            <div className='container'>
                <h1>I'm Wendy a Frontend Developer</h1>
                <div className='item'>
                    <img src={photo_1} alt='wendy' />
                </div>
            </div>
        </div>
    );
}