import React, { Component } from 'react';
import Class from './Header.module.scss';

class Header extends Component {
  state={
    currentSlide:0
  }

  HandleSlide=function() {
    let current=0;
    if(this.state.currentSlide<this.props.images.length-1){
      current=this.state.currentSlide+1
    }
    this.setState({
      currentSlide:current
    })
  }
  currentSlide=function(n) {
    this.setState({
      currentSlide:n
    })
  }
  render() {
    var style=null;
    var topLeft={
      bottom: '400px',
      left: '300px',
    }
    var BottomLeft={
      bottom: '400px',
      left: '800px',
    }
    var myBackgroundImageList=null;
    console.log(this.props.images);
    var classNames=[Class.mySlides,Class.fade]
    console.log(classNames.join(' '));
    if(this.props.images){
        myBackgroundImageList = this.props.images.map((img,i)=>{
          if(img.textPosition==='topLeft'){
            style={
              top: '100px',
              right: '100px',
            }
          }else if(img.textPosition==='BottomLeft'){
            style={
              bottom: '100px',
              left: '200px',
            }
          }else{
            style={
              bottom: '100px',
              left: '800px',
            }
          }
          return <div key={i} className={classNames.join(' ')}>
            <div className={Class.numbertext}>{i+1} / {this.props.images.length}</div>
            <img className={Class.image} src={img.src}/>
            <div className={Class.text} style={style}>{img.Content}
            <div className={Class.myButton}>Shop Now</div>
            </div>
            </div>
        }
      )
    }

    setTimeout(()=> {
      this.HandleSlide()
    }, 15000);
     var myBackgroundImage=myBackgroundImageList[this.state.currentSlide]

    console.log(myBackgroundImageList);

    return (
      <div className={Class.Header}>
      <div>
      {myBackgroundImage}
      <div className={Class.dots} style={{textAlign:'center'}}>
        <span className={Class.dot} onClick={()=>this.currentSlide(0)}></span>
        <span className={Class.dot} onClick={()=>this.currentSlide(1)}></span>
        <span className={Class.dot} onClick={()=>this.currentSlide(2)}></span>
      </div>

      </div>
      </div>
    );
  }
}

export default Header;
