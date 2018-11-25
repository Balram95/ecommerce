import React, { Component } from 'react';
import Classes from './App.module.css';
import Header from './Components/Header/Header';
import logo from '../public/imgs/image1'

class App extends Component {
  state={
    imgs:[{
      src:logo
    }
    ]
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
