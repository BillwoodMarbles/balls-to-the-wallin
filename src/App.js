// react
import React, {Component} from 'react';

// components
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHero from "./components/MainHero";
import OurStory from "./components/OurStory";
import Photos from "./components/Photos";
import Registry from "./components/Registry";
import RSVP from "./components/RSVP";
import WeddingParty from "./components/WeddingParty";

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './less/main.less';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js/dist/popper.min';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activeHeader: false,
      navLinks: []
    };
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
          anchor: 'registry',
          title: 'Registry'
        },
        {
          key: 6,
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

        {/*<section className="section section-stream">*/}
          {/*<iframe src="https://www.youtube.com/embed/live_stream?channel=UCHrIxVUeJct0_wYWoy600kQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
        {/*</section>*/}

        <Registry/>
        <RSVP/>
        <Footer/>
      </div>
    );
  }
}
