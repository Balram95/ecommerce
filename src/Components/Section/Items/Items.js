import React, { Component } from 'react';
import Class from './Items.module.scss'
import image1 from '../../../imgs/image1.jpg'


class Items extends Component {
  state={
    hover:false
  }

  changeHover = ()=>{
    let vals=this.state.hover
    this.setState({
      hover:!vals
    })
  }
  render() {
    let val=null
    if(this.state.hover){
        val=<div className={Class.info}>
          <p>price: $150</p>
        </div>
    }



    return (
      <div className={Class.Items}>
        <div onMouseOver={()=>this.changeHover()} onMouseOut={()=>this.changeHover()} className={Class.pic}>
          <img src={image1} alt="fs"/>
          <div className={Class.darken}>
            {val}
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
