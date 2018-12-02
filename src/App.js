import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar';

import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter , Route } from 'react-router-dom';
import Section from './Components/Section/Section'

import Class from './App.module.css'

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path='/shirts' exact component={Section}/>
          <Route path='/shoes' exact component={Section}/>
          <Route path='/jeans' exact component={Section}/>
          <Route path='/' exact component={MainPage}/>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
