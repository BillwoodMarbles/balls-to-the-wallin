// react
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify'

class Story extends Component {
    render() {
        return (
            <div className="story-container">
                <div className="image-panel">
                    <div className="image-block" style={ {'backgroundImage': `url(${this.props.story.imgUrl})` } }>
                    </div>
                </div>

                <div className="story-panel">
                    <h3>{this.props.story.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.story.story)}}>
                    </div>
                </div>
            </div>
        );
    }
}

Story.propTypes = {
    story: PropTypes.shape({
        key: PropTypes.number,
        date: PropTypes.string,
        title: PropTypes.string,
        story: PropTypes.string,
        imgUrl: PropTypes.string
    }),
};

export default Story;
