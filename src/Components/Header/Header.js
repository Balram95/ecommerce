import React, { Component } from 'react';
import Class from './Header.module.scss';

class Header extends Component {
  render() {
    var myBackgroundImageList=null;
    var classNames=[Class.mySlides,Class.fade]
    if(this.props.images){
        myBackgroundImageList= this.props.images.map((img,i)=>{
          return
            <div key={i} className={classNames.join(' ')}>
              <div className={Class.numbertext}>{i} / {this.props.images.length}</div>
              <img src={img.src} style="width:100%"/>
              <div className={Class.text}>Caption Text</div>
           </div>
        })
    }
    console.log(myBackgroundImageList);

    return (
      <div className={Class.Header}>
        {myBackgroundImageList[0]}
      </div>
    );
  }
}

export default Header;
