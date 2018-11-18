// react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavLink extends Component {
    render() {
        return (
            <li className="nav-item">
                <a href={'#' + this.props.navLink.anchor} className="nav-link">{this.props.navLink.title}</a>
            </li>
        );
    }
}

NavLink.propTypes = {
    navLink: PropTypes.shape({
        key: PropTypes.number,
        title: PropTypes.string
    }),
};

export default NavLink;
