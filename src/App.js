// react
import React, {Component} from 'react';

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
        }
    }

    handleScroll() {
        let isActive = $(window).scrollTop() > 50;

        this.setState({
            activeHeader: isActive
        });
    }

    componentWillMount() {
        window.addEventListener('scroll', () => this.handleScroll());

        this.setState({
            navLinks: [
                {
                    key: 1,
                    title: 'Our Story'
                },
                {
                    key: 2,
                    title: 'Wedding Party'
                },
                {
                    key: 3,
                    title: 'Photos'
                },
                {
                    key: 4,
                    title: 'Events'
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
                <Footer/>
            </div>
        );
    }
}
