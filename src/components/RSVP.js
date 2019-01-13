// react
import React, { Component } from 'react';

class RSVP extends Component {
    render() {
        return (
            <section id={'rsvp'} className="section section-rsvp section-blue text-center">
                <h2>RSVP</h2>

                <a href="https://goo.gl/forms/xcxzap7nOxdRIWjw2"
                   target="_blank"
                   className="btn btn-outline-white">
                    Click Here to RSVP
                </a>
            </section>
        );
    }
}

export default RSVP;
