// react
import React, { Component } from 'react';

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
            imgUrl: '/src/assets/img/wedding-party/brittney.jpg',
            side: 'bride'
        };

        let selectedGroom = {
            key: 2,
            name: 'Harrison Wallin',
            imgUrl: '/src/assets/img/wedding-party/harry.jpg',
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
                    imgUrl: '/src/assets/img/wedding-party/brittney.jpg',
                    side: 'bride'
                },
                {
                    key: 2,
                    name: 'Harrison Wallin',
                    imgUrl: '/src/assets/img/wedding-party/harry.jpg',
                    side: 'groom'
                },
                {
                    key: 3,
                    name: 'Jenna Rozanek',
                    imgUrl: '/src/assets/img/wedding-party/jenna.jpg',
                    side: 'bride'
                },
                {
                    key: 4,
                    name: 'Justin Wallin',
                    imgUrl: '/src/assets/img/wedding-party/justin.jpg',
                    side: 'groom'
                },
                {
                    key: 5,
                    name: 'Paige Pohlmeier',
                    imgUrl: '/src/assets/img/wedding-party/paige.jpg',
                    side: 'bride'
                },
                {
                    key: 6,
                    name: 'Jake Heim',
                    imgUrl: '/src/assets/img/wedding-party/jake.jpg',
                    side: 'groom'
                },
                {
                    key: 7,
                    name: 'Brittney McCarthy',
                    imgUrl: '/src/assets/img/wedding-party/brittney-m.jpg',
                    side: 'bride'
                },
                {
                    key: 8,
                    name: 'Brock Pohlmeier',
                    imgUrl: '/src/assets/img/wedding-party/brock.jpg',
                    side: 'groom'
                },
                {
                    key: 9,
                    name: 'Nicole Zach',
                    imgUrl: '/src/assets/img/wedding-party/nicole.jpg',
                    side: 'bride'
                },
                {
                    key: 10,
                    name: 'Matt Haith',
                    imgUrl: '/src/assets/img/wedding-party/matt.jpg',
                    side: 'groom'
                },
                {
                    key: 11,
                    name: 'Katherine Ringenberg',
                    imgUrl: '/src/assets/img/wedding-party/kat.jpg',
                    side: 'bride'
                },
                {
                    key: 12,
                    name: 'Trent Smith',
                    imgUrl: '/src/assets/img/wedding-party/trent.jpg',
                    side: 'groom'
                },
                {
                    key: 13,
                    name: 'Nikki Kohles',
                    imgUrl: '/src/assets/img/wedding-party/nikki.jpg',
                    side: 'bride'
                },
                {
                    key: 14,
                    name: 'Dwayne Pierce',
                    imgUrl: '/src/assets/img/wedding-party/dwayne.jpg',
                    side: 'groom'
                }
            ]
        })
    }

    render() {
        let party;

        if (this.state.party) {
            party = this.state.party.map(person => {
                return <div key={person.key} className={`${person.key > this.state.party.length / 2 ? 'text-right' : 'text-left'}`}>
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
                    </a>
                </div>
            })
        }

        return (
            <section id="wedding_party" className="section section-blue section-wedding-party">
                <div className="container">
                    <h2>Wedding Party</h2>

                    <div className="selected-container">
                        <div className="selected selected-bride">
                            <div className="selected-content">
                                <div className={`front ${this.state.selectedBrideFront ? 'active' : ''}`}>
                                    <h4>{this.state.selectedBrideF.name}</h4>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedBrideF.imgUrl})` } }>
                                    </div>
                                </div>

                                <div className={`back ${this.state.selectedBrideFront ? '' : 'active'}`}>
                                    <h4>{this.state.selectedBrideB.name}</h4>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedBrideB.imgUrl})` } }>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="selected selected-groom">
                            <div className="selected-content">
                                <div className={`front ${this.state.selectedGroomFront ? 'active' : ''}`}>
                                    <h4>{this.state.selectedGroomF.name}</h4>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedGroomF.imgUrl})` } }>
                                    </div>
                                </div>

                                <div className={`back ${this.state.selectedGroomFront ? '' : 'active'}`}>
                                    <h4>{this.state.selectedGroomB.name}</h4>
                                    <div className="image-block"
                                         style={ {'backgroundImage': `url(${this.state.selectedGroomB.imgUrl})` } }>
                                    </div>
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
