// react
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

// components
import Story from "./Story";

// images
import Hawaii from '../assets/img/events/hawaii.jpg';
import Nebraska from '../assets/img/events/nebraska.jpg';

class Events extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }

    componentWillMount() {
        this.setState({
            events: [
                {
                    key: 1,
                    title: 'The Wedding',
                    imgUrl: Hawaii,
                    story: `
                        <p>
                            <strong>When:</strong> April 6th, 2019<br />
                            <strong>Where:</strong> Oahu, HI
                        </p>
                        <p>More details to come</p>
                    `
                },
                {
                    key: 2,
                    title: 'The Reception',
                    imgUrl: Nebraska,
                    story: `
                         <p>
                            <strong>When:</strong> May 11th, 2019<br />
                            <strong>Where:</strong> Bellevue, NE
                        </p>
                        <p>More details to come</p>
                    `
                }
            ]
        })
    }

    render() {

        let events;

        if (this.state.events && this.state.events.length) {
            events = this.state.events.map(story => {
                return <Story key={story.key} story={story}/>
            })
        }

        return (
            <ScrollableAnchor id={'events'}>
                <section className="section section-grey section-events">
                    <div className="overlay-leaves"></div>

                    <div className="container">
                        <h2>Events</h2>

                        <div className="events-container">
                            {events}
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default Events;
