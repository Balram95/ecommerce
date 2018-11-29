import React, { Component } from 'react';
import Class from './Navbar.module.scss';
import ShopList from '../ShopList/ShopList';

class Navbar extends Component {
  state={
    showShopList:false
  }
  showBar=()=>{
    var current=this.state.showShopList
    this.setState({
      showShopList:!current
    })
  }

  render() {
    var content=null;
    if(this.state.showShopList){
      content= <ShopList/>
    }
    return (
      <div className={Class.navbar}>
        <ul className={Class.list}>
          <li onClick={this.showBar}>Shop</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Offers</li>
          <li>Search</li>
        </ul>
        {content}
      </div>
    );
  }
}

export default Navbar;
