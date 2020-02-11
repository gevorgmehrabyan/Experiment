import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Carousel } from 'antd';
//Images
import banner1 from '../../../Assets/images/banner1.jpg';
//Components
import Banner from './Banner';
// Style
import './BannerSlider.scss';

const bannersList = [
  {
    id: 1,
    name: 'touching',
    imageURL: banner1
  },
  {
    id: 2,
    name: 'touching2',
    imageURL: banner1
  },
  {
    id: 3,
    name: 'touching',
    imageURL: banner1
  },
  {
    id: 4,
    name: 'touching2',
    imageURL: banner1
  },
  {
    id: 5,
    name: 'touching',
    imageURL: banner1
  }
];

const emptyBanner = {
  id: 0,
  name: 'NoBanners',
  imageURL: null,
  link: null,
  subTitle: null
};

class BannersSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }

  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      loading: false,
      loaded: false
    };
    const resultList = !isEmpty(bannersList) ? bannersList : [emptyBanner];

    const banners = resultList.map(item => {
      return <Banner key={item.id} banner={item} />;
    });

    return (
      <div className="banner_container">
        <div className="wrapper">
          <Carousel ref={node => (this.carousel = node)} {...props}>
            {banners}
          </Carousel>
        </div>
        <button className="left_arrow" onClick={this.previous}></button>
        <button className="right_arrow" onClick={this.next}></button>
      </div>
    );
  }
}

export default BannersSlider;
