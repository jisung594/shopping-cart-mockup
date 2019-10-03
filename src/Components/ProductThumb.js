import React from 'react';
import '../App.scss';

const ProductThumb = (props) => {
  let { jacketData } = props;

  return (
    <div className="thumb">
      <img src={jacketData["colors"][0]["img_src"]} alt="product img"/>
      <br/>
      <label>{jacketData["brand"]}</label>
      <p>{jacketData["jacket_name"]}</p>
      <span className="pro-price">{jacketData["pro_price"]}</span>
      <span className="retail-price">{jacketData["retail_price"]}</span>
    </div>
  );
}

export default ProductThumb;
