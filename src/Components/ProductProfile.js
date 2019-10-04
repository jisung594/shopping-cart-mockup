import React from 'react';
import '../App.scss';

const ProductProfile = (props) => {
  let { jacketObj } = props;

  let jacketSizes
  let jacketByColor

  if (jacketObj.id) {
    jacketSizes = jacketObj.available_sizes.map(size => {
      return <label>{size}</label>
    })

    jacketByColor = jacketObj.colors.map(jacketByColor => {
      return <img src={jacketByColor.img_src} alt={jacketByColor.color}/>
    })
  }

  return (
    <div className="profile">
      <img src={jacketObj.colors[0].img_src} alt={jacketObj.colors[0].color}/>
      <h2>{jacketObj.brand}</h2>
      <p>{jacketObj.jacket_name}</p>
      {jacketSizes}
      {jacketByColor}
    </div>
  );
}

export default ProductProfile;
