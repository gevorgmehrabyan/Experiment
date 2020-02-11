import React, { Component } from 'react';
// Styles
import './Banner.style.scss';

class Banner extends Component {
  render() {
    const { banner } = this.props;
    const { imageURL } = banner;

    return (
      <div className="holder">
        <img src={imageURL} alt="images" />
      </div>
    );
  }
}

export default Banner;
