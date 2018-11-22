// react
import React, { Component } from 'react';

class RSVP extends Component {
    render() {
        return (
            <section id={'rsvp'} className="section section-rsvp section-blue text-center">
                <h2>RSVP</h2>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1MyyHY2YA-r0QbFCGuC-X_Sn_KqgZTkXnrm2UKpIGT62lBQ/viewform?usp=pp_url&entry.1910812824=0"
                   target="_blank"
                   className="btn btn-outline-white">
                    Click Here to RSVP
                </a>
            </section>
        );
    }
}

export default RSVP;
