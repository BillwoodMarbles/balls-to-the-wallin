// react
import React, { Component } from 'react';

// images
import Brittney from '../assets/img/wedding-party/brit.jpg';
import Jenna from '../assets/img/wedding-party/jenna.jpg';
import Kat from '../assets/img/wedding-party/kat.jpg';
import BrittneyM from '../assets/img/wedding-party/brittney-m.jpg';
import Nikki from '../assets/img/wedding-party/nikki.jpg';
import Paige from '../assets/img/wedding-party/paige.jpg';
import Nicole from '../assets/img/wedding-party/nicole.jpg';
import Harry from '../assets/img/wedding-party/harry.jpg';
import Jake from '../assets/img/wedding-party/jake.jpg';
import Dwayne from '../assets/img/wedding-party/dwayne.jpg';
import Matt from '../assets/img/wedding-party/matt.jpg';
import Trent from '../assets/img/wedding-party/trent.jpg';
import Brock from '../assets/img/wedding-party/brock.jpg';
import Justin from '../assets/img/wedding-party/justin.jpg';

class WeddingParty extends Component {
    constructor() {
        super();
        this.state = {
            party: [],
            selectedBride: {},
            selectedBrideF: {},
            selectedBrideB: {},
            selectedBrideFront: true,
            selectedGroom: {},
            selectedGroomF: {},
            selectedGroomB: {},
            selectedGroomFront: true,
        };

        this.selectParty = this.selectParty.bind(this);
    }

    selectParty(person) {
        if (person.side === 'groom') {
            if (this.state.selectedGroomFront) {
                if (person.key !== this.state.selectedGroomF.key) {
                    this.setState(
                        {
                            selectedGroom: person,
                            selectedGroomB: person,
                            selectedGroomFront: !this.state.selectedGroomFront
                        }
                    )
                }
            } else {
                if (person.key !== this.state.selectedGroomB.key) {
                    this.setState(
                        {
                            selectedGroom: person,
                            selectedGroomF: person,
                            selectedGroomFront: !this.state.selectedGroomFront
                        }
                    )
                }
            }
        } else {
            if (this.state.selectedBrideFront) {
                if (person.key !== this.state.selectedBrideF.key) {
                    this.setState(
                        {
                            selectedBride: person,
                            selectedBrideB: person,
                            selectedBrideFront: !this.state.selectedBrideFront
                        }
                    )
                }
            } else {
                if (person.key !== this.state.selectedBrideB.key) {
                    this.setState(
                        {
                            selectedBride: person,
                            selectedBrideF: person,
                            selectedBrideFront: !this.state.selectedBrideFront
                        }
                    )
                }
            }
        }
    }

    componentWillMount() {
        let selectedBride = {
            key: 1,
            name: 'Brittney Jurgens',
            subtitle: 'The Bride',
            imgUrl: Brittney,
            side: 'bride'
        };

        let selectedGroom = {
            key: 2,
            name: 'Harrison Wallin',
            subtitle: 'The Groom',
            imgUrl: Harry,
            side: 'groom'
        };

        this.setState({
            selectedBride: selectedBride,
            selectedBrideF: selectedBride,
            selectedGroom: selectedGroom,
            selectedGroomF: selectedGroom,
            party: [
                {
                    key: 1,
                    name: 'Brittney Jurgens',
                    subtitle: 'The Bride',
                    imgUrl: Brittney,
                    side: 'bride'
                },
                {
                    key: 2,
                    name: 'Harrison Wallin',
                    subtitle: 'The Groom',
                    imgUrl: Harry,
                    side: 'groom'
                },
                {
                    key: 3,
                    name: 'Jenna Rozanek',
                    subtitle: 'The Maid of Honor - BFFs since elementary',
                    imgUrl: Jenna,
                    side: 'bride'
                },
                {
                    key: 4,
                    name: 'Justin Wallin',
                    subtitle: 'The Best Man',
                    imgUrl: Justin,
                    side: 'groom'
                },
                {
                    key: 5,
                    name: 'Paige Pohlmeier',
                    subtitle: 'BFFs since high school',
                    imgUrl: Paige,
                    side: 'bride'
                },
                {
                    key: 6,
                    name: 'Jake Heim',
                    subtitle: 'The Best Cousin',
                    imgUrl: Jake,
                    side: 'groom'
                },
                {
                    key: 7,
                    name: 'Brittney McCarthy',
                    subtitle: 'BFFs since elementary',
                    imgUrl: BrittneyM,
                    side: 'bride'
                },
                {
                    key: 8,
                    name: 'Brock Pohlmeier',
                    subtitle: 'The Smartest Friend',
                    imgUrl: Brock,
                    side: 'groom'
                },
                {
                    key: 9,
                    name: 'Nicole Zach',
                    subtitle: 'BFFs since high school',
                    imgUrl: Nicole,
                    side: 'bride'
                },
                {
                    key: 10,
                    name: 'Matt Haith',
                    subtitle: 'The Most Stylish Friend',
                    imgUrl: Matt,
                    side: 'groom'
                },
                {
                    key: 11,
                    name: 'Katherine Ringenberg',
                    subtitle: 'BFFs since college',
                    imgUrl: Kat,
                    side: 'bride'
                },
                {
                    key: 12,
                    name: 'Trent Smith',
                    subtitle: 'The Trent Smith',
                    imgUrl: Trent,
                    side: 'groom'
                },
                {
                    key: 13,
                    name: 'Nikki Kohles',
                    subtitle: 'BFFs since college',
                    imgUrl: Nikki,
                    side: 'bride'
                },
                {
                    key: 14,
                    name: 'Dwayne Pierce',
                    subtitle: 'The Snowboarding/Drinking Buddy',
                    imgUrl: Dwayne,
                    side: 'groom'
                }
            ]
        })
    }

    render() {
        let party;

        if (this.state.party) {
            party = this.state.party.map(person => {
                return <div key={person.key} className={`${person.key > this.state.party.length / 2 ? 'bottom' : 'top'} image-block-container`}>
                    <a onMouseEnter={() => this.selectParty(person)}>
                        <div className={
                                `image-block ${person.side} ${person.key === this.state.selectedGroom.key || person.key === this.state.selectedBride.key ? 'active' : ''}`
                            }
                             style={
                                 {
                                     'backgroundImage': `url(${person.imgUrl})`
                                }
                             }>
                        </div>

                        <h4>{person.name}</h4>
                        <h5>{person.subtitle}</h5>
                    </a>
                </div>
            })
        }

        return (
            <section id={'wedding_party'} className="section section-green section-wedding-party">
                <div className="overlay-green"></div>

                <div className="container">
                    <h2>Wedding Party</h2>

                    <div className="selected-container">
                        <div className="selected selected-bride">
                            <div className="selected-content">
                                <div className={`front ${this.state.selectedBrideFront ? 'active' : 'hidden'}`}>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedBrideF.imgUrl})` } }>
                                    </div>
                                    <h4>{this.state.selectedBrideF.name}</h4>
                                    <h5>{this.state.selectedBrideF.subtitle}</h5>
                                </div>

                                <div className={`back ${this.state.selectedBrideFront ? 'hidden' : 'active'}`}>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedBrideB.imgUrl})` } }>
                                    </div>
                                    <h4>{this.state.selectedBrideB.name}</h4>
                                    <h5>{this.state.selectedBrideB.subtitle}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="selected selected-groom">
                            <div className="selected-content">
                                <div className={`front ${this.state.selectedGroomFront ? 'active' : 'hidden'}`}>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedGroomF.imgUrl})` } }>
                                    </div>
                                    <h4>{this.state.selectedGroomF.name}</h4>
                                    <h5>{this.state.selectedGroomF.subtitle}</h5>
                                </div>

                                <div className={`back ${this.state.selectedGroomFront ? 'hidden' : 'active'}`}>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedGroomB.imgUrl})` } }>
                                    </div>
                                    <h4>{this.state.selectedGroomB.name}</h4>
                                    <h5>{this.state.selectedGroomB.subtitle}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="party-container">
                        {party}
                    </div>
                </div>
            </section>
        );
    }
}

export default WeddingParty;
