import React from 'react';
import '../App.scss';

const ProductProfile = (props) => {
  let { jacketObj } = props;

  return (
    <div className="profile">
      <h2>{jacketObj.brand}</h2>
      <p>{jacketObj.jacket_name}</p>
    </div>
  );
}

export default ProductProfile;
