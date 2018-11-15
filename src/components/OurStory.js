// react
import React, { Component } from 'react';
// components
import Story from "./Story";

class OurStory extends Component {
    constructor() {
        super();
        this.state = {
            stories: []
        }
    }

    componentWillMount() {
        this.setState({
            stories: [
                {
                    key: 1,
                    title: 'The Summer of 2010',
                    imgUrl: '/src/assets/img/wedding-party/brittney.jpg',
                    story: `
                        <p>It all started with nothing...</p>
                        <p>
                            Like, for real. Brittney first texted Harry a blank text. A quick reply from Harry being 
                            "?" and a "whoops" from Brittney and the rest was history.
                        </p>
                    `
                },
                {
                    key: 2,
                    title: 'We Bought a Zoo',
                    imgUrl: '/src/assets/img/wedding-party/harry.jpg',
                    story: `
                        <p>Once upon a time, we had fun</p>
                        <p>The fun was so great, that we laughed all day and it was great!</p>
                    `
                },
                {
                    key: 3,
                    title: 'New York, New York',
                    imgUrl: '/src/assets/img/wedding-party/trent.jpg',
                    story: `
                        <p>Once upon a time, we had fun</p>
                        <p>The fun was so great, that we laughed all day and it was great!</p>
                    `
                }
            ]
        })
    }

    render() {
        let stories;

        if (this.state.stories) {
            stories = this.state.stories.map(story => {
                return <Story key={story.key} story={story}/>
            })
        }

        return (
            <section id="our_story" className="section section-our-story">
                <div className="container">
                    <h2>Our Story</h2>
                    {stories}
                </div>
            </section>
        );
    }
}

export default OurStory;
