// react
import React, { Component } from 'react';
import Background from '../assets/img/main-bg.jpg';

class MainHero extends Component {
    render() {
        return (
            <section className="hero hero-main" style={{'backgroundImage': `url(${Background})`}}>
                <div className="hero-content">
                    <h1>May 11th Update</h1>
                    <p>The Nebraska celebration location has moved to the DC Centre in Omaha</p>
                    <a href={'#events'} className="nav-link btn btn-outline-primary">More Details</a>
                </div>
            </section>
        );
    }
}

export default MainHero;
