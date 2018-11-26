import React, { Component } from 'react';
import Class from './ShopList.module.scss';

class ShopList extends Component {
  render() {
    return (
      <div className={Class.ShopList}>
        <div className={Class.myShop_list}>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>v</li>
            <li>debug</li>
            <li>f</li>
            <li>f</li>
          </ul>
          <ul>
            <li>f</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>k</li>
            <li>d</li>
          </ul>
          <ul>
            <li>j</li>
            <li>y</li>
            <li>g</li>
            <li>b</li>
            <li>t</li>
            <li>a</li>
          </ul>
          <ul>
            <li>j</li>
            <li>y</li>
            <li>g</li>
            <li>b</li>
            <li>t</li>
            <li>a</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShopList;
