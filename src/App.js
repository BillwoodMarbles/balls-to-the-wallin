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
                <Footer/>
            </div>
        );
    }
}
