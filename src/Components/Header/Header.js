import React, { Component } from 'react';
import Class from './Header.module.scss';

class Header extends Component {
  state={
    currentSlide:0
  }

  HandleSlide=function() {
    let current=0;
    if(this.state.currentSlide<this.props.banners.length-1){
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
  componentDidUpdate(){
    this.turnOff=setTimeout(()=> {
      this.HandleSlide()
    }, 15000);
  }
  componentWillUnmount(){
    clearTimeout(this.turnOff);
  }
  render() {
    var style=null;
    var myBackgroundImageList=null;
    var classNames=[Class.mySlides,Class.fade]
    if(this.props.banners){
        myBackgroundImageList = this.props.banners.map((banner,i)=>{
          if(banner.text_position==='topLeft'){
            style={
              top: '10rem',
              left: '50rem',
            }
          }else if(banner.text_position==='bottomLeft'){
            style={
              bottom: '20rem',
              left: '20rem',
            }
          }else if(banner.text_position==='topRight'){
            style={
              top: '10rem',
              right: '10rem',
            }
        }else if(banner.text_position==='bottomRight'){
            style={
              bottom: '20rem',
              right: '40rem',
            }
        }else if(banner.text_position==='center'){
            style={
              bottom: '30rem',
              left: '30rem',
          }
        }else{
            style={
              bottom: '40rem',
              left: '10rem',
            }
          }
          return <div key={i} className={classNames.join(' ')}>
            <div className={Class.numbertext}>{i+1} / {this.props.banners.length}</div>
            <img className={Class.image} src={banner.image} alt="Vikas's ecommerce"/>
            <div className={Class.text} style={style}>{banner.content}
            <div className={Class.myButton}>Shop Now</div>
            </div>
            </div>
        }
      )
    }


     var myBackgroundImage=myBackgroundImageList[this.state.currentSlide]

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
