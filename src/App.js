// react
import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

// components
import Events from "./components/Events";
import Header from "./components/Header";
import MainHero from "./components/MainHero";
import OurStory from "./components/OurStory";
import Photos from "./components/Photos";
import RSVP from "./components/RSVP";
import WeddingParty from "./components/WeddingParty";

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './less/main.less';
import Footer from "./components/Footer";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            activeHeader: false,
            navLinks: []
        };

        configureAnchors({offset: -30, keepLastAnchorHash: true});
    }

    handleScroll() {
        let prevActive = this.state.activeHeader;
        let isActive = $(window).scrollTop() > 50;

        if (isActive !== prevActive) {
            this.setState({
                activeHeader: isActive
            });
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', () => this.handleScroll());

        this.setState({
            navLinks: [
                {
                    key: 1,
                    anchor: 'our_story',
                    title: 'Our Story'
                },
                {
                    key: 2,
                    anchor: 'wedding_party',
                    title: 'Wedding Party'
                },
                {
                    key: 3,
                    anchor: 'photos',
                    title: 'Photos'
                },
                {
                    key: 4,
                    anchor: 'events',
                    title: 'Events'
                },
                {
                    key: 5,
                    anchor: 'rsvp',
                    title: 'RSVP'
                }
            ]
        })
    }

    render() {
        return (
            <div className="app">
                <Header navLinks={this.state.navLinks} isActive={this.state.activeHeader}/>
                <MainHero/>
                <OurStory/>
                <WeddingParty/>
                <Photos/>
                <Events/>
                <RSVP/>
                <Footer/>
            </div>
        );
    }
}
