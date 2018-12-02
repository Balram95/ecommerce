import React, { Component } from 'react';
import Class from './ShopList.module.scss';
import { Link} from 'react-router-dom'

class ShopList extends Component {
  render() {
    return (
      <div className={Class.ShopList}>
        <div className={Class.myShop_list}>
          <ul>
            <li onClick={this.props.hideBar}><Link to='/shirts'>Shirts</Link></li>
            <li><Link to='/jeans'>Jeans</Link></li>
            <li><Link to='/shoes'>Shoes</Link></li>

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
