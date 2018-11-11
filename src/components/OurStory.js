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
                    title: 'Story #1',
                    imgUrl: '/src/assets/img/main-bg.jpg',
                    story: `
                        <p>Once upon a time, we had fun</p>
                        <p>The fun was so great, that we laughed all day and it was great!</p>
                    `
                },
                {
                    key: 2,
                    title: 'Story #2',
                    imgUrl: '/src/assets/img/main-bg.jpg',
                    story: `
                        <p>Once upon a time, we had fun</p>
                        <p>The fun was so great, that we laughed all day and it was great!</p>
                    `
                },
                {
                    key: 3,
                    title: 'Story #3',
                    imgUrl: '/src/assets/img/main-bg.jpg',
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
