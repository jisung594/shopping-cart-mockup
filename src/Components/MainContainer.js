import React, {Component} from 'react';
import ProductThumb from './ProductThumb'
import jacketData from '../jackets.json'
import '../App.scss';

class MainContainer extends Component {

  displayJackets = () => {
    return jacketData["jackets"].map(jacketObj => {
      return <ProductThumb key={jacketObj["id"]} jacketData={jacketObj}/>
    })
  }

  render () {
    console.log(jacketData["jackets"])
    return (
      <div className="main-container">
        <h2>Main Container</h2>
        <img src={jacketData["jackets"][0]["img_src"]} alt="product img"/>
      </div>
    );
  }
}

export default MainContainer;
