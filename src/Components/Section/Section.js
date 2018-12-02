import React, { Component } from 'react';
import Class from './Section.module.scss'
import Items from './Items/Items'
import FilterSection from './FilterSection/FilterSection'
import Banner from './Banner/Banner'

class Section extends Component {
  render() {
    return (
      <div className={Class.Section}>
        <Banner/>
        <div className={Class.Main}>
          <FilterSection/>
          <div className={Class.Items}>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
