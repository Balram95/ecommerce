import React, { Component } from 'react';
import Class from './MainCategory.module.scss';

class MainCategory extends Component {
  render() {
    var CategoryList=null;

    if(this.props.Categories){
        CategoryList = this.props.Categories.map((Category,i)=>{
          var style1={
            order:`${i%2}`
          }
          var style2={
            order:`${i%2}+1`
          }
          return <div key={i} className={Class.Content}>
                    <div style={style1} className={Class.description}>
                      <p className={Class.title}>{Category.CategoryTitle}</p>
                      <p className={Class.desc}>{Category.CategoryDesc}</p>
                      <p className={Class.Button}>Explore Now</p>
                    </div>
                    <img style={style2} src={Category.CategoryImage} alt="Vikas"/>
                  </div>
        }
      )
    }
    return (
      <div className={Class.MainCategory}>
        {CategoryList}
      </div>
    );
  }
}

export default MainCategory;
