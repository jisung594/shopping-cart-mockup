import React from 'react';
import '../App.scss';

const CartItem = (props) => {
  const { cartItem, count, addToCart, removeFromCart } = props;

  return (
    <div className="cart-item">

      <div>
        <img src={cartItem.img_src} alt={cartItem.color} className="cart-img"/>
      </div>

      <div>
        <label>{cartItem.jacket.brand}</label>
        <h4>{cartItem.jacket.jacket_name}</h4>
        <p>{cartItem.size} / {cartItem.color}</p>
      </div>

      <div>
        <div>
          <span>${cartItem.jacket.retail_price}</span>
          <span>${cartItem.jacket.pro_price}</span>
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
