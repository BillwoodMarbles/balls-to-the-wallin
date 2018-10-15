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

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            navLinks: []
        }
    }

    componentWillMount() {
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
                },
                {
                    key: 5,
                    title: 'RSVP'
                }
            ]
        })
    }

    render() {
        return (
            <div className="app">
                <Header navLinks={this.state.navLinks}/>
                <MainHero/>
                <OurStory/>
                <WeddingParty/>
                <Photos/>
                <Events/>
                <RSVP/>
            </div>
        );
    }
}
