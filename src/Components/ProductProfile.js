import React, { useState, useEffect } from 'react';
import '../App.scss';

const ProductProfile = (props) => {
  const { jacketObj, addToCart, open } = props;
  const [state, setState] = useState({
    size: "",
    color: "",
    img_src: ""
  })


  useEffect(() => {
    open ? shiftLeft() : shiftRight()
  })

  const shiftLeft = () => {
    const profile = document.querySelector(".row-1")
    profile.style.gridTemplateColumns = "auto 300px 350px"
  }

  const shiftRight = () => {
    let profile = document.querySelector(".row-1")
    profile.style.gridTemplateColumns = "auto 300px"
  }


  const selectSize = (sizeStr) => {
    setState({
      size: sizeStr,
      color: state.color,
      img_src: state.img_src
    });
  }

  const selectColor = (colorObj) => {
    setState({
      size: state.size,
      color: colorObj.color,
      img_src: colorObj.img_src
    });
  }


  let jacketSizes
  let jacketByColor

  if (jacketObj.id) {
    jacketSizes = jacketObj.available_sizes.map((size, i) => {
      return <label
        key={i+1}
        className="size-selection"
        style={state.size === size ? {border: "20px solid #FF4C5E"} : null}
        onClick={() => selectSize(size)}>{size}</label>
    })

    jacketByColor = jacketObj.colors.map((color, i) => {
      return <img
        key={i+2}
        className="color-selection"
        src={color.img_src}
        alt={color.color}
        style={state.color === color.color ? {border: "20px solid #FF4C5E"} : null}
        onClick={() => selectColor(color)}
      />
    })
  }

  return (
    <div className="profile">
      <div className="row-1">
        <div>
          <img id="main-img" src={jacketObj.colors[0].img_src} alt={jacketObj.colors[0].color}/>
        </div>
        <div className="color-gallery">
        {jacketByColor}
        </div>
      </div>

      <div className="row-2">

        <h5>{jacketObj.brand}</h5>
        <h3>{jacketObj.jacket_name}</h3>

        <h4>PRO PRICE</h4>
        <p>${jacketObj.pro_price}<span>${jacketObj.retail_price}</span></p>

        {jacketSizes}

        <button id="add-btn" onClick={
          state.size && state.color
            ? () => addToCart({
              jacket: jacketObj,
              size: state.size,
              color: state.color,
              img_src: state.img_src
            })
            : () => {window.alert("Please specify both size and color.")}
        }>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductProfile;
