import React, { Component } from 'react';
import Classes from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import logo from './imgs/image1.jpg'
import logo1 from './imgs/image2.jpg'
import logo2 from './imgs/image3.jpg'

class App extends Component {
  state={
    imgs:[{
      src:logo,
      textPosition:'topLeft',
      Content:"The Smell of Summer"
    },{
      src:logo1,
      textPosition:'top',
      Content:"Start your Routine"
    },{
      src:logo2,
      textPosition:'BottomLeft',
      Content:"All the Way to Life"
    }]
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Header images={this.state.imgs}/>
      </div>
    );
  }
}

export default App;
