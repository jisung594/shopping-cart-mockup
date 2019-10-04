import React from 'react';
import ProductThumb from './ProductThumb'
import '../App.scss';

const Results = (props) => {
  let { jacketsList, clickHandler } = props;

  let jacketThumbs = jacketsList.map(jacketObj => {
    return <ProductThumb key={jacketObj.id} jacketData={jacketObj} clickHandler={clickHandler}/>
  })

  return (
    <div className="results">
      <h2>Men's Insulated Jackets</h2>
      <div className="thumbsList">{jacketThumbs}</div>
    </div>
  );
}

export default Results;
