import React, { Component } from 'react';
import Classes from './App.module.css';
import Header from './Components/Header'

class App extends Component {
  state={
    imgs:[{
      src='./public/imgs/image1.jpg'
    },
    {
      src='./public/imgs/image3.jpg'
    },
    {
      src='./public/imgs/image2.jpg'
    }]
  }
  render() {
    return (
      <div>
        <Header images={this.state.imgsHeader}/>
      </div>
    );
  }
}

export default App;
