// react
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class Photos extends Component {
    constructor() {
        super();
        this.state = {
            engagement: [],
            instagram: [],
            wedding: []
        };
    }

    componentWillMount() {
        this.setState({
            gallery: [
                {
                    key: 1,
                    imgUrl: '/src/assets/img/wedding-party/brittney.jpg',
                },
                {
                    key: 2,
                    imgUrl: '/src/assets/img/wedding-party/harry.jpg'
                },
                {
                    key: 3,
                    imgUrl: '/src/assets/img/wedding-party/jenna.jpg'
                },
                {
                    key: 4,
                    imgUrl: '/src/assets/img/wedding-party/justin.jpg'
                },
                {
                    key: 5,
                    imgUrl: '/src/assets/img/wedding-party/paige.jpg'
                },
                {
                    key: 6,
                    imgUrl: '/src/assets/img/wedding-party/jake.jpg'
                },
                {
                    key: 7,
                    imgUrl: '/src/assets/img/wedding-party/brittney-m.jpg'
                },
                {
                    key: 8,
                    imgUrl: '/src/assets/img/wedding-party/brock.jpg'
                }
            ],
            engagement: [
                {
                    key: 1,
                    imgUrl: '/src/assets/img/wedding-party/brittney.jpg',
                },
                {
                    key: 2,
                    imgUrl: '/src/assets/img/wedding-party/harry.jpg'
                },
                {
                    key: 3,
                    imgUrl: '/src/assets/img/wedding-party/jenna.jpg'
                },
                {
                    key: 4,
                    imgUrl: '/src/assets/img/wedding-party/justin.jpg'
                },
                {
                    key: 5,
                    imgUrl: '/src/assets/img/wedding-party/paige.jpg'
                },
                {
                    key: 6,
                    imgUrl: '/src/assets/img/wedding-party/jake.jpg'
                },
                {
                    key: 7,
                    imgUrl: '/src/assets/img/wedding-party/brittney-m.jpg'
                },
                {
                    key: 8,
                    imgUrl: '/src/assets/img/wedding-party/brock.jpg'
                }
            ],
            wedding: [

            ],
            instagram: [

            ]
        });
    }

    selectGallery(gallery) {
        this.setState({
            gallery: this.state[gallery]
        });
    }

    render() {
        let gallery;

        if (this.state.gallery && this.state.gallery.length) {
            gallery = this.state.gallery.map(photo => {
                return <a href={photo.imgUrl} data-fancybox="gallery-all" key={photo.key} className={`image-block`}
                             style={
                                 {
                                     'backgroundImage': `url(${photo.imgUrl})`
                                 }
                             }>
                        </a>
            });
        }

        return (
            <ScrollableAnchor id={'photos'}>
                <section className="section section-photos">
                    <h2>Photos</h2>

                    <div className="btn-container">
                        <button className="btn btn-outline-primary" onClick={() => this.selectGallery('engagement')}>ENGAGEMENT</button>
                        <button className="btn btn-outline-primary" onClick={() => this.selectGallery('wedding')}>WEDDING</button>
                        <button className="btn btn-outline-primary" onClick={() => this.selectGallery('instagram')}>#Balls2TheWallin</button>
                    </div>

                    <div className="gallery-container">
                        {gallery}
                        {!gallery && (<h3>Coming Soon...</h3>)}
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default Photos;
