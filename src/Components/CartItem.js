import React from 'react';
import '../App.scss';

const CartItem = (props) => {
  let { cartItem, count, addToCart, removeFromCart } = props;

  console.log(cartItem.jacket.jacket_name, cartItem.size, count);

  return (
    <div className="cart-item">
      <label>{cartItem.jacket.brand}</label>
      <h3>{cartItem.jacket.jacket_name}</h3>
      <p>{cartItem.size}</p>
      <p>{cartItem.color}</p>

      <span onClick={() => removeFromCart(cartItem)}>-</span>
      <span>{count}</span>
      <span onClick={() => addToCart(cartItem)}>+</span>
    </div>
  );
}

export default CartItem;
