// react
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

// components
import Story from "./Story";

// images
import Couch from '../assets/img/story/couch.jpg';
import Mountains from '../assets/img/story/mountains.jpg';
import NewYork from '../assets/img/story/newyork.jpg';

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
                    title: 'It all started with nothing...',
                    imgUrl: Couch,
                    story: `
                        <p>
                            Like, for real. Brittney first texted Harry a blank text. A quick reply from Harry being 
                            "?" and a "whoops" from Brittney and the rest was history.
                        </p>
                        <p>
                            In actuality, being from small Nebraska towns just 10 miles away from each other- we had known “of” each other for quite some time.  But all it took was space bar and now here we are 8 years later.
                        </p>
                    `
                },
                {
                    key: 2,
                    title: 'We Bought a Zoo',
                    imgUrl: Mountains,
                    story: `
                        <p>Off to Lincoln, NE we went to finish our college degrees, watch husker football, and take care of 3 fur balls. Keely, our Siberian husky, came first. Then Kitten, and then we got a screaming maniac of a cat, Lucille. Probably the reason why we haven’t gotten anymore :) No, we love them all equally- but of course, I mean, Keely is the best.</p>
                        <p>
We’re still taking care of the three, but our scenery has changed a bit. We graduated with our bachelor’s in May of 2014 and then took the summer off to figure some stuff out and binge watch Game of Thrones.  We road tripped across the US and landed back in Denver, Colorado.  Snowboarding being a lot of the reason we moved, Brittney had to get in on the action. She is now pretty good on a snowboard, thanks to Harry. We have thrown some of the best parties and have made some of the best friends. Don’t think the two are in anyway related though.. :)</p>
                    `
                },
                {
                    key: 3,
                    title: 'Surprise Surprise',
                    imgUrl: NewYork,
                    story: `
                        <p>Something we have always done in our relationship and have loved doing for one another is surprising each other. Whether it be with small gifts, date nights, or vacations.  Brittney once surprised Harry with a trip to Las Vegas and made him solve a scavenger hunt to figure it out.  The last puzzle was a word jumble of “Vegas Baby” and Harry thought Brittney was announcing a pregnancy guessing “Baby Gaves.” Obviously, the surprise was quite the opposite with a weekend in Vegas :)</p>
                        <p>Another surprise that sticks out over the years was when Harry surprised Brittney with a trip to Hawaii. He made our apartment into an elaborate escape room with different padlocks and everything.  Even with all of that, Harry out did himself when he surprised Brittney with a ring.</p>
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
