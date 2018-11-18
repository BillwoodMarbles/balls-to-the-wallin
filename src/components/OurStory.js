// react
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

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
                    imgUrl: '/src/assets/img/story/couch.jpg',
                    story: `
                        <p>It all started with nothing...</p>
                        <p>
                            Like, for real. Brittney first texted Harry a blank text. A quick reply from Harry being 
                            "?" and a "whoops" from Brittney and the rest was history.
                        </p>
                    `
                }
            ]
        })
    }

    render() {
        let stories;

        if (this.state.stories && this.state.stories.length) {
            stories = this.state.stories.map(story => {
                return <Story key={story.key} story={story}/>
            })
        }


        return (
            <ScrollableAnchor id={'our_story'}>
                <section className="section section-our-story">
                    <div className="container">
                        <h2>Our Story</h2>
                        {stories}
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default OurStory;
