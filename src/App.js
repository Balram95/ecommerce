import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ProductOfTheWeek from './Components/ProductOfTheWeek/ProductOfTheWeek';
import LogoBanner from './Components/LogoBanner/LogoBanner';
import MainCategory from './Components/MainCategory/MainCategory';
import logo from './imgs/image1.jpg'
import logo1 from './imgs/image2.jpg'
import logo2 from './imgs/image3.jpg'
import  image1 from './imgs/image4.jpg'
import  image2 from './imgs/image5.jpg'
import  image3 from './imgs/image6.jpg'
import  image4 from './imgs/image9.jpg'
import  image5 from './imgs/image10.jpg'
import  image6 from './imgs/image11.jpg'
import Class from './App.module.css'
import axios from 'axios'

class App extends Component {

  state={
    Categories:[
      {
        CategoryTitle:'Summer Harvest Body Lotion',
        CategoryImage:image5,
        CategoryDesc:'We make our perfumes and cosmetics using natural and organic ingredients. We take our inspiration from the landscape around us. Everything is made by hand, on site, in the Burren.',
      },
      {
        CategoryTitle:'Summer Harvest Body Lotion',
        CategoryImage:image6,
        CategoryDesc:'We make our perfumes and cosmetics using natural and organic ingredients. We take our inspiration from the landscape around us. Everything is made by hand, on site, in the Burren.',
      },
    ],
    product:[
      {
        productName:'Summer Harvest Body Lotion',
        productImage:image1,
        productPrice:'$300',
      },
      {
        productName:'Summer Harvest Body Lotion',
        productImage:image2,
        productPrice:'$700',
      },
      {
        productName:'Summer Harvest Body Lotion',
        productImage:image3,
        productPrice:'$800',
      }
    ],
    banners:[]
  }
  componentWillMount=()=>{
    console.log('willll');
  }
  componentDidMount=()=>{
    console.log('here');
    var self = this;
    axios.get('http://192.168.1.118:8000/api/ecommerce/banners/',{ crossdomain: true })
      .then(function (response) {
        console.log(response.data);
        self.setState({
          banners:response.data
        })
      })
      .catch(function (error) {
        console.log(error);
        self.setState({
          banners:[{
            image:logo,
            text_position:'topLeft',
            content:"The Smell of Summer"
          },{
            image:logo1,
            text_position:'bottomRight',
            content:"Start your Routine"
          },{
            image:logo2,
            text_position:'bottomLeft',
            content:"All the Way to Life"
          }]
        })
      });
  }
  render() {
    var ProductsOfTheWeek=[this.state.product[0],this.state.product[1],this.state.product[2]]
    return (
      <div>
        <Navbar/>
        <Header banners={this.state.banners}/>
        <ProductOfTheWeek Products={ProductsOfTheWeek}/>
        <LogoBanner Banner={image4}/>
        <MainCategory Categories={this.state.Categories}/>
      </div>
    );
  }
}

export default App;
