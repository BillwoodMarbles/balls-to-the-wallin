// react
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

// components
import Story from "./Story";

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
                    imgUrl: '/src/assets/img/wedding-party/brittney.jpg',
                    story: `
                        <p>
                            <strong>When:</strong> April 6th, 2019<br />
                            <strong>Where:</strong> Oahu, HI
                        </p>
                    `
                },
                {
                    key: 2,
                    title: 'The Reception',
                    imgUrl: '/src/assets/img/wedding-party/harry.jpg',
                    story: `
                         <p>
                            <strong>When:</strong> May 11th, 2019<br />
                            <strong>Where:</strong> Bellevue, NE
                        </p>
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
