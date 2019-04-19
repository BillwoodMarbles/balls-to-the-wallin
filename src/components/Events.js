// react
import React, { Component } from 'react';

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
                        <h5>Hale Koa Estate</h5>
                        <p>
                            <a href="https://goo.gl/maps/qTjjaD2Zhc72" target="_blank">
                              53-012 Halai St. Hau'ula, HI 96717
                            </a><br />
                            April 6th, 2019<br />
                            4PM Ceremony
                        </p>
                        
                        <h5>Things to Do</h5> 
                        <ul>
                          <li><a href="https://buttonssurfschool.com/" target="_blank">Button's Surf School</a></li>
                          <li><a href="https://www.hawaii.com/oahu/shopping/haleiwa/" target="_blank">Shopping at Haleiwa</a></li>
                          <li><a href="https://www.gohawaii.com/islands/oahu/regions/honolulu/Waikiki" target="_blank">Explore Waikiki</a></li>
                          <li><a href="https://visitpearlharbor.org/" target={'_blank'}>Visit Pearl Harbor</a></li>
                          <li><a href="https://www.best-of-oahu.com/diamond-head-trail.html" target="_blank">Hike Diamond Head</a></li>
                          <li><a href="http://www.giovannisshrimptruck.com/" target="_blank">Sign your name on the Giovanni's Shrimp Truck</a></li>
                        </ul>
                    `
                },
                {
                    key: 2,
                    title: 'The Celebration',
                    imgUrl: Nebraska,
                    story: `
                         <h5>Base Lake Recreation Area</h5>
                         <p>
                            <a href="https://goo.gl/maps/jKCuChMkKYu" target="_blank">Lake Dr. Bellevue, NE 68005</a><br />
                            May 11th, 2019<br />
                            5PM - 10PM
                        </p>
                        
                        <h5>
                          <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/bellevue/bvune/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-BVUNE" target="_blank">
                            Hotel - Holiday Inn Express & Suites
                          </a>
                        </h5> 
                        <p>
                            <a href="https://goo.gl/maps/hheKkSEZJzz" target="_blank">10804 S 15th St, Bellevue, NE 68123</a><br />
                            <a href="tel:+402-502-4500">(402) 502-4500</a><br />
                            Block: Jurgens-Wallin Wedding<br />
                            <i>Please make your reservations by April 10th for group rate</i>
                        </p>
                        
                        <h5>Things to Do</h5> 
                        <ul>
                           <li><a href="http://www.omahazoo.com/" target="_blank">Henry Doorly Zoo</a></li>
                           <li><a href="https://oldmarket.com/" target="_blank">Visit Omaha's Old Market</a></li>
                           <li><a href="https://ziplinebrewing.com/" target="_blank">Drink local beer at Zipline Brewery</a></li>
                           <li><a href="https://durhammuseum.org/" target="_blank">The Durham Museum</a></li>
                        </ul>
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
            <section id={'events'} className="section section-grey section-events">
                <div className="overlay-leaves"></div>

                <div className="container">
                    <h2>Events / Accommodations</h2>

                    <div className="events-container">
                        <div className="story-container">
                            <div className="image-panel">
                                <div className="image-block" style={ {'backgroundImage': `url(${this.state.events[0].imgUrl})` } }>
                                </div>
                            </div>

                            <div className="story-panel">
                                <h3>The Wedding</h3>
                                <h5>Hale Koa Estate</h5>
                                <p>
                                    <a href="https://goo.gl/maps/qTjjaD2Zhc72" target="_blank">
                                        53-012 Halai St. Hau'ula, HI 96717
                                    </a><br />
                                    April 6th, 2019<br />
                                    4PM Ceremony
                                </p>

                                <h5>Things to Do</h5>
                                <ul>
                                    <li><a href="https://buttonssurfschool.com/" target="_blank">Button's Surf School</a></li>
                                    <li><a href="https://www.hawaii.com/oahu/shopping/haleiwa/" target="_blank">Shopping at Haleiwa</a></li>
                                    <li><a href="https://www.gohawaii.com/islands/oahu/regions/honolulu/Waikiki" target="_blank">Explore Waikiki</a></li>
                                    <li><a href="https://visitpearlharbor.org/" target={'_blank'}>Visit Pearl Harbor</a></li>
                                    <li><a href="https://www.best-of-oahu.com/diamond-head-trail.html" target="_blank">Hike Diamond Head</a></li>
                                    <li><a href="http://www.giovannisshrimptruck.com/" target="_blank">Sign your name on the Giovanni's Shrimp Truck</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="story-container">
                            <div className="image-panel">
                                <div className="image-block" style={ {'backgroundImage': `url(${this.state.events[1].imgUrl})` } }>
                                </div>
                            </div>

                            <div className="story-panel">
                                <h3>The Celebration (updated)</h3>
                                <h5>DC Centre</h5>
                                <p>
                                    <a href="https://goo.gl/maps/oBu191yNh537Qm8s8" target="_blank">11830 Stonegate Dr. Omaha, NE 68164</a><br />
                                    May 11th, 2019<br />
                                    5PM - 11PM
                                </p>

                                <h5>
                                    <a target="_blank">
                                        Hotels
                                    </a>
                                </h5>

                                <p>
                                    <strong><a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/omaha/omawm/hoteldetail" target="_blank">Holiday Inn Express & Suites</a></strong><br />
                                    <a href="https://goo.gl/maps/3Q7t4Td3YkWhrmqH6" target="_blank">11818 Miami St, Omaha, NE 68164</a><br />
                                    <a href="tel:+402-445-4445">(402) 445-4445</a><br />
                                    <i>7 minute walk from venue</i>
                                </p>

                                <p>
                                    <strong><a href="https://hamptoninn3.hilton.com/en/index.html" target="_blank">Hampton Inn Omaha</a></strong><br />
                                    <a href="https://goo.gl/maps/hheKkSEZJzz" target="_blank">11201 Davenport St, Omaha, NE 68154</a><br />
                                    <a href="tel:+402-334-4938">(402) 334-4938</a><br />
                                    <i>7 minute drive from venue</i>
                                </p>

                                {/*<p>*/}
                                    {/*<a href="https://www.hiexpress.com/redirect?path=rates&brandCode=EX&localeCode=en&regionCode=1&hotelCode=BVUNE&checkInDate=10&checkInMonthYear=042019&checkOutDate=12&checkOutMonthYear=042019&_PMID=99801505&GPC=JW1&viewfullsite=true"*/}
                                       {/*target="_blank" className="btn btn-outline-primary">*/}
                                        {/*Book Online*/}
                                    {/*</a>*/}
                                {/*</p>*/}

                                <h5>Things to Do</h5>
                                <ul>
                                    <li><a href="http://www.omahazoo.com/" target="_blank">Henry Doorly Zoo</a></li>
                                    <li><a href="https://oldmarket.com/" target="_blank">Visit Omaha's Old Market</a></li>
                                    <li><a href="https://ziplinebrewing.com/" target="_blank">Drink local beer at Zipline Brewery</a></li>
                                    <li><a href="https://durhammuseum.org/" target="_blank">The Durham Museum</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Events;
