import React, { Component } from 'react';
import Class from './Header.module.scss';

class Header extends Component {
  render() {
    var myBackgroundImageList=null;
    var classNames=[class.mySlides,class.fade]
    if(this.props.images){
        myBackgroundImageList= this.props.images.map((img,i)=>{
          return
            <div key={i} className={classNames.join(' ')}>
            <div className={class.numbertext}>{i} / {this.props.images.length}</div>
            <img src={img.src} style="width:100%">
            <div className={class.text}>Caption Text</div>
           </div>
        })
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    return (
      <div className={Class.Header}>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="img1.jpg" style="width:100%">
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="img2.jpg" style="width:100%">
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="img3.jpg" style="width:100%">
          <div className="text">Caption Three</div>
        </div>

        <!-- Next and previous buttons -->
        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a className="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <!-- The dots/circles -->
        <div style="text-align:center">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
    );
  }
}

export default Header;
