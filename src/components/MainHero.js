// react
import React, { Component } from 'react';
import Background from '../assets/img/main-bg.jpg';

class MainHero extends Component {
    render() {
        return (
            <section className="hero hero-main" style={{'backgroundImage': `url(${Background})`}}>

            </section>
        );
    }
}

export default MainHero;
