import React, { Component } from 'react';
import Class from './ProductOfTheWeek.module.scss';

class ProductOfTheWeek extends Component {
  render() {
    return (
      <div className={Class.ProductOfTheWeek}>
            <p className={Class.main}> The Burren Perfumery is a small, west of
             Ireland-based company making cosmetics and perfumes inspired by
             the landscape around us. Everything is made
             on site, by hand, in small batches.</p>
            <div className={Class.Products}>
                  <div className={Class.Product_main}>
                      <img className={Class.main_image} src={this.props.Products[0].productImage} alt="Vikas's ecommerce"/>
                      <div>
                        <p className={Class.title}>{this.props.Products[0].productName}</p>

                        <p className={Class.description}>{this.props.Products[0].productPrice}</p>
                      </div>
                  </div>
                  <div className={Class.subProucts}>
                      <div className={Class.Product_sub}>
                          <img className={Class.sub_image1} src={this.props.Products[1].productImage} alt="Vikas's ecommerce"/>
                          <div className={Class.Sub_container}>
                            <p className={Class.title}>{this.props.Products[1].productName}</p>
                            <p className={Class.description}>{this.props.Products[1].productPrice}</p>
                          </div>
                      </div>
                      <div className={Class.Product_sub}>
                      <div className={Class.Sub_container}>
                        <p className={Class.title}>{this.props.Products[2].productName}</p>
                        <p className={Class.description}>{this.props.Products[2].productPrice}</p>
                      </div>
                          <img className={Class.sub_image2} src={this.props.Products[2].productImage} alt="Vikas's ecommerce"/>

                      </div>
                  </div>
                  
            </div>
      </div>
    );
  }
}

export default ProductOfTheWeek;
