import React, { Component } from 'react';
import Class from './Banner.module.scss'
import bannerImage from '../../../imgs/image1.jpg'

class Banner extends Component {
  render() {
    return (
      <div className={Class.Banner}>
        <img src={bannerImage} alt="Shirts"/>
      </div>
    );
  }
}

export default Banner;
