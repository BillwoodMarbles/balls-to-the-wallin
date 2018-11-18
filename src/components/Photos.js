// react
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import DOMPurify from 'dompurify'

class Photos extends Component {
    constructor() {
        super();
        this.state = {
            engagement: [],
            instagram: [],
            wedding: [],
            selected: 'engagement'
        };
    }

    componentWillMount() {
        const engagementPhotos = [
            {
                key: 1,
                imgUrl: '/src/assets/img/engagement/engage_1.jpg',
            },
            {
                key: 2,
                imgUrl: '/src/assets/img/engagement/engage_2.jpg',
            },
            {
                key: 3,
                imgUrl: '/src/assets/img/engagement/engage_3.jpg',
            },
            {
                key: 4,
                imgUrl: '/src/assets/img/engagement/engage_4.jpg',
            },
            {
                key: 5,
                imgUrl: '/src/assets/img/engagement/engage_5.jpg',
            },
            {
                key: 6,
                imgUrl: '/src/assets/img/engagement/engage_6.jpg',
            },
            {
                key: 7,
                imgUrl: '/src/assets/img/engagement/engage_7.jpg',
            },
            {
                key: 8,
                imgUrl: '/src/assets/img/engagement/engage_8.jpg',
            },
            {
                key: 9,
                imgUrl: '/src/assets/img/engagement/engage_9.jpg',
            },
            {
                key: 10,
                imgUrl: '/src/assets/img/engagement/engage_10.jpg',
            },
            {
                key: 11,
                imgUrl: '/src/assets/img/engagement/engage_11.jpg',
            },
            {
                key: 12,
                imgUrl: '/src/assets/img/engagement/engage_12.jpg',
            },
            {
                key: 13,
                imgUrl: '/src/assets/img/engagement/engage_13.jpg',
            },
            {
                key: 14,
                imgUrl: '/src/assets/img/engagement/engage_14.jpg',
            },
            {
                key: 15,
                imgUrl: '/src/assets/img/engagement/engage_15.jpg',
            },
            {
                key: 16,
                imgUrl: '/src/assets/img/engagement/engage_16.jpg',
            }
        ];

        const weddingPhotos = [];
        const instagramPhotos =[];

        this.setState({
            gallery: engagementPhotos,
            engagement: engagementPhotos,
            wedding: weddingPhotos,
            instagram: instagramPhotos,
            selected: 'engagement'
        });
    }

    selectGallery(gallery) {
        this.setState({
            gallery: this.state[gallery],
            selected: gallery
        });
    }

    render() {
        let gallery;
        let additionalCopy;

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

        if (this.state.selected === 'instagram') {
            additionalCopy = 'Use our hashtag <strong>#Balls2TheWallin</strong> on Instagram or Facebook and the photo will be added here';
        } else {
            additionalCopy = 'Photos provided by <strong><a href="http://www.gracetphotography.com/" target="_blank">Grace T. Photography</a></strong>'
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

                    <p className="text-center" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(additionalCopy)}}></p>

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
