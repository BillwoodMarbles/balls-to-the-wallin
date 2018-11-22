// react
import React, { Component } from 'react';
import DOMPurify from 'dompurify'

const reqEngagement = require.context ( '../assets/img/engagement', true, /\.jpg/ );
const engagmentImages = reqEngagement.keys().map( path => reqEngagement ( path ) );

const reqHashtag = require.context ( '../assets/img/hashtag', true, /\.jpg/ );
const hashtagImages = reqHashtag.keys().map( path => reqHashtag ( path ) );

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
                imgUrl: engagmentImages[0],
            },
            {
                key: 2,
                imgUrl: engagmentImages[1],
            },
            {
                key: 3,
                imgUrl: engagmentImages[2],
            },
            {
                key: 4,
                imgUrl: engagmentImages[3],
            },
            {
                key: 5,
                imgUrl: engagmentImages[4],
            },
            {
                key: 6,
                imgUrl: engagmentImages[5],
            },
            {
                key: 7,
                imgUrl: engagmentImages[6],
            },
            {
                key: 8,
                imgUrl: engagmentImages[7],
            },
            {
                key: 9,
                imgUrl: engagmentImages[8],
            },
            {
                key: 10,
                imgUrl: engagmentImages[9],
            },
            {
                key: 11,
                imgUrl: engagmentImages[10],
            },
            {
                key: 12,
                imgUrl: engagmentImages[11],
            },
            {
                key: 13,
                imgUrl: engagmentImages[12],
            },
            {
                key: 14,
                imgUrl: engagmentImages[13],
            },
            {
                key: 15,
                imgUrl: engagmentImages[14],
            },
            {
                key: 16,
                imgUrl: engagmentImages[15],
            }
        ];

        const weddingPhotos = [];
        const instagramPhotos =[
            {
                key: 1,
                imgUrl: hashtagImages[0]
            },
            {
                key: 2,
                imgUrl: hashtagImages[1]
            },
            {
                key: 3,
                imgUrl: hashtagImages[2]
            },
            {
                key: 4,
                imgUrl: hashtagImages[3]
            },
            {
                key: 5,
                imgUrl: hashtagImages[4]
            },
            {
                key: 6,
                imgUrl: hashtagImages[5]
            }

        ];

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
            <section id={'photos'} className="section section-photos">
                <h2>Photos</h2>

                <div className="btn-container">
                    <button className="btn btn-outline-primary" onClick={() => this.selectGallery('engagement')}>ENGAGEMENT</button>
                    <button className="btn btn-outline-primary" onClick={() => this.selectGallery('instagram')}>#Balls2TheWallin</button>
                    <button className="btn btn-outline-primary" onClick={() => this.selectGallery('wedding')}>WEDDING</button>
                </div>

                <p className="text-center" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(additionalCopy)}}></p>

                <div className="gallery-container">
                    {gallery}
                    {!gallery && (<h3>Coming Soon...</h3>)}
                </div>
            </section>
        );
    }
}

export default Photos;
