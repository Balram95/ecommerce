import React, { Component } from 'react';
import Class from './LogoBanner.module.scss';

class LogoBanner extends Component {
  render() {
    var style={
      backgroundImage: `url(${this.props.Banner})`
    }
    return (
      <div style={style} className={Class.LogoBanner}>
      </div>
    );
  }
}

export default LogoBanner;
