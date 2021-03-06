import React from 'react';
import '../App.scss';

const CartItem = (props) => {
  const { cartItem, count, addToCart, removeFromCart } = props;

  return (
    <div className="cart-item">

      <div className="cart-item-col-1">
        <img src={cartItem.img_src} alt={cartItem.color}/>
      </div>

      <div className="cart-item-col-2">
        <label>{cartItem.jacket.brand}</label>
        <h4>{cartItem.jacket.jacket_name}</h4>
        <p>{cartItem.size} / {cartItem.color}</p>
      </div>

      <div className="cart-item-col-3">
        <div className="prices">
          <span id="pro-price">${cartItem.jacket.pro_price}</span>
          <span id="retail-price">${cartItem.jacket.retail_price}</span>
        </div>

        <div className="update-quantity">
          <span onClick={() => removeFromCart(cartItem)}>-</span>
          <span>{count}</span>
          <span onClick={() => addToCart(cartItem)}>+</span>
        </div>
      </div>

    </div>
  );
}

export default CartItem;
