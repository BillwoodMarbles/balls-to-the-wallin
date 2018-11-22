// react
import React, { Component } from 'react';
import Background from '../assets/img/main-bg.jpg';

class MainHero extends Component {
    render() {
        return (
            <section className="hero hero-main" style={{'backgroundImage': `url(${Background})`}}>
                <h1>April 6th, 2019</h1>
            </section>
        );
    }
}

export default MainHero;
