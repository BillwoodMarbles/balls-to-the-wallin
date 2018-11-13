// react
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import NavLink from "./NavLink";

class Header extends Component {
    render() {
        let navLinks;

        if (this.props.navLinks) {
            navLinks = this.props.navLinks.map(navLink => {
                return <NavLink key={navLink.key} navLink={navLink}/>
            })
        }

        return (
            <header id="header" className={`site-header ${this.props.isActive ? 'active' : ''}`}>
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="navbar-brand">Harrison &amp; Brittney</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto">{navLinks}</ul>
                    </div>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    isActive: PropTypes.bool,
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number,
            title: PropTypes.string
        })
    )
};

export default Header;
