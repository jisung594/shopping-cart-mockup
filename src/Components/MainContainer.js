import React, {Component} from 'react';
import ProductThumb from './ProductThumb'
import jacketData from '../jackets.json'
import '../App.scss';

class MainContainer extends Component {

  render () {
    let jacketThumbs = jacketData["jackets"].map(jacketObj => {
      return <ProductThumb key={jacketObj["id"]} jacketData={jacketObj}/>
    })

    return (
      <div className="main-container">
        <h2>Men's Insulated Jackets</h2>
        <div className="thumbsList">{jacketThumbs}</div>
      </div>
    );
  }
}

export default MainContainer;
