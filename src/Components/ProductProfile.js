import React, { useState } from 'react';
import '../App.scss';

const ProductProfile = (props) => {
  let { jacketObj, addToCart } = props;
  let [state, setState] = useState({size: "", color: ""})

  let selectSize = (sizeStr) => {
    setState({ size: sizeStr, color: state.color });
  }

  let selectColor = (colorObj) => {
    setState({ size: state.size, color: colorObj.color });
  }


  let jacketSizes
  let jacketByColor

  if (jacketObj.id) {
    jacketSizes = jacketObj.available_sizes.map((size, i) => {
      return <label
        key={i+1} onClick={() => selectSize(size)}>{size}</label>
    })

    jacketByColor = jacketObj.colors.map((color, i) => {
      return <img key={i+2}
        src={color.img_src}
        alt={color.color}
        onClick={() => selectColor(color)}
      />
    })
  }

console.log(state);

  return (
    <div className="profile">

      <button onClick={
        state.size && state.color
          ? () => addToCart(jacketObj)
          : () => {window.alert("Please specify both size and color.")}
      }>Add to Cart</button>

      <img src={jacketObj.colors[0].img_src} alt={jacketObj.colors[0].color}/>
      <h2>{jacketObj.brand}</h2>
      <p>{jacketObj.jacket_name}</p>
      {jacketSizes}
      {jacketByColor}
    </div>
  );
}

export default ProductProfile;
