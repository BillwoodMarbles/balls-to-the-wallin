// react
import React, {Component} from 'react';

// images
import Target from '../assets/img/registration/target.jpeg';
import GoFundMe from '../assets/img/registration/gofundme-logo.png';

class Registration extends Component {
  render() {
    return (
      <section id={'registration'} className="section section-registration text-center">
        <div className="container">
          <h2>Registration</h2>
          {/*<p>We are registering for bla bla bla</p>*/}

          <div className="registration-link-container">
            <div className="registration-link">
              <a href="https://www.target.com/gift-registry/giftgiver?registryId=758e6e26de4a4bcfaa01ca633f3a7dc0&type=WEDDING"
                 target="_blank">
                <img src={Target} alt="Target" className="target"/>
              </a>
            </div>

            <div className="registration-link">
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

export default Registration;
