// react
import React, {Component} from 'react';

// images
import Target from '../assets/img/registration/target.jpeg';
import GoFundMe from '../assets/img/registration/gofundme-logo.png';

class Registry extends Component {
  render() {
    return (
      <section id={'registry'} className="section section-registration text-center">
        <div className="container">
          <h2>Registry</h2>
          <p>
            We have not registered for much as we are hoping to live with less so we can do more!<br />
            Our GoFundMe link is to help us fulfill our dream of building a tiny home.
          </p>

          <div className="registry-link-container">
            <div className="registry-link">
              <a href="https://www.target.com/gift-registry/giftgiver?registryId=758e6e26de4a4bcfaa01ca633f3a7dc0&type=WEDDING"
                 target="_blank">
                <img src={Target} alt="Target" className="target"/>
              </a>
            </div>

            <div className="registry-link">
              <a href="https://www.gofundme.com/big-dream-of-a-tiny-home"
                 target="_blank">
                <img src={GoFundMe} alt="Go Fund Me" className="go-fund-me"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Registry;
