import React, { Component } from 'react';
import Class from './Navbar.module.scss';
import ShopList from '../ShopList/ShopList';

class Navbar extends Component {

  render() {
    return (
      <div className={Class.navbar}>
        <ul className={Class.list}>
          <li>Shop</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Offers</li>
          <li>Search</li>
        </ul>
        <ShopList/>
      </div>
    );
  }
}

export default Navbar;
