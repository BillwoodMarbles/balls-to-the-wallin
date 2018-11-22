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

    shufflePhotos(photos) {
        for (let i = photos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [photos[i], photos[j]] = [photos[j], photos[i]];
        }
    }

    parsePhotos(photos) {
        let parsedPhotos = [];

        for (let i in photos) {
            let photo = {
                key: i,
                imgUrl: photos[i]
            };

            parsedPhotos.push(photo);
        }

        return parsedPhotos;
    }

    componentWillMount() {
        this.shufflePhotos(engagmentImages);
        this.shufflePhotos(hashtagImages);

        const engagementPhotos = this.parsePhotos(engagmentImages);
        const weddingPhotos = [];
        const instagramPhotos = this.parsePhotos(hashtagImages);

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
