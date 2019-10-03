import React from 'react';
import { Link } from 'react-router-dom'
import '../App.scss';

const ProductThumb = (props) => {
  let { jacketData, clickHandler } = props;

  return (
    <div className="thumb">
      <img src={jacketData["colors"][0]["img_src"]} alt="product img"/>
      <br/>
      <label>{jacketData["brand"]}</label>
      <p>{jacketData["jacket_name"]}</p>

      <div>
        <span className="pro-price">${jacketData["pro_price"]}</span>
        <span className="retail-price">${jacketData["retail_price"]}</span>
      </div>
      <Link className="link" to={`/insulated/${jacketData.id}`}>
        <button className="view-profile" onClick={() => clickHandler(jacketData)}>View</button>
      </Link>
    </div>
  );
}

export default ProductThumb;
