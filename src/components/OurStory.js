// react
import React, { Component } from 'react';

// components
import Story from "./Story";

// images
import Couch from '../assets/img/story/couch.jpg';
import Hawaii from '../assets/img/story/hawaii.jpg';
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
                        <p>It all started with nothing. Like, for real. Brittney made the first move by texting Harry a blank text. A quick reply from Harry being “?” and a “whoops” from Brittney and the rest is history.</p> 
                        <p>In actuality, being from small Nebraska towns just 10 miles away from each other- we had known “of” each other for quite some time.  But all it took was space bar and now here we are 8 years later.</p>
                    `
                },
                {
                    key: 2,
                    title: 'We Bought a Zoo',
                    imgUrl: Mountains,
                    story: `
                        <p>Off to Lincoln, NE we went to finish our college degrees, watch husker football, and take care of THREE fur balls. Keely, our Siberian husky, came first. Then Kitten. And then we got a screaming maniac of a cat, Lucille. Probably the reason why we haven’t gotten anymore :) No, we love them all equally- but of course, I mean, Keely is the best.</p>
                        <p>We’re still taking care of the three, but our scenery has changed a bit. We graduated with our bachelor’s in May of 2014 and then took the summer off to make a plan and binge watch Game of Thrones.  We road tripped across the US and landed back in Denver, Colorado.  Snowboarding being a lot of the reason we moved, Brittney had to get in on the action. She is now pretty gnarly on the mountains, thanks to Harry. We have thrown some of the best parties and have made some of the best friends. Don’t think the two are in anyway related though.. :)</p>
                    `
                },
                {
                    key: 3,
                    title: 'Surprise Surprise',
                    imgUrl: Hawaii,
                    story: `
                        <p>Something we have always done in our relationship and have loved doing for one another is surprising each other. Whether it be with small gifts, date nights, or vacations.  Brittney once surprised Harry with a trip to Las Vegas and made him solve a scavenger hunt to figure it out.  The last puzzle was a word jumble of “Vegas Baby” and Harry thought Brittney was announcing a pregnancy guessing “Baby Gaves.” Obviously, the surprise was quite the opposite with a birthday weekend in Vegas :)</p>
                        <p>Another surprise that sticks out over the years was when Harry surprised Brittney with a trip to Hawaii. He made our apartment into an elaborate escape room with different padlocks and everything.  Even with all of that, Harry out did himself when he surprised Brittney with a ring.</p>
                    `
                },
                {
                    key: 4,
                    title: '12.17.18',
                    imgUrl: NewYork,
                    story: `
                        <p>It was our last day on our vacation to New York City. It being a dream of Brittney’s to see Christmas in New York, she had an inkling that maybe an engagement would be in store. We spent the day in Central Park and even with all of the people there, we seemed to keep finding these secluded, romantic areas. When we tell the story today, Harry likes to say that Brittney was leading him to these places purposefully.</p>
                        <p>After a few hours, we left the park and headed back to the hotel to get ready to go out to dinner. Brittney thought- ok, if it was going to happen, it would have happened at Central Park today, so relax. We planned to go to a trendy sushi spot, but Harry had other plans. He ordered an uber and Brittney, thinking we were on our way to the restaurant, leans over to Harry 20 minutes into the drive and says, “Ya know, I think these drivers take the long way to charge you more.” Harry could only chuckle to himself because we were actually on our way back to Central Park.</p>
                        <p>We arrived to our destination and Harry lead Brittney through the park. He knew exactly where he was going- back to a spot he had picked out earlier in the day. It was right by the trickling stream, perfectly lit with a cast iron lamp post, complete with a beautiful view of the city. It was like everything stopped when he got down on one knee- the hustle and bustle of the city was quiet- and our moment was perfect.  We know you are all probably on the edge of your seats, but Brittney said yes :)</p>
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
            <section id={'our_story'} className="section section-our-story">
                <div className="container">
                    <h2>Our Story</h2>
                    {stories}
                </div>
            </section>
        );
    }
}

export default OurStory;
