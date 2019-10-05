import React from 'react';
import CartItem from './CartItem'
import '../App.scss';

const ShoppingCart = (props) => {
  let { cart, addToCart, removeFromCart } = props;

  let counter = {}
  cart.forEach(item => {
    var key = JSON.stringify(item)
    counter[key] = (counter[key] || 0) + 1
  })

  const uniqueItems = cart.filter((item,i) => {
    return i === cart.findIndex(obj =>{
      return JSON.stringify(obj) === JSON.stringify(item)
    })
  })

  const cartItems = uniqueItems.map((item,i) => {
    return <CartItem
      key={i}
      cartItem={item}
      count={counter[JSON.stringify(item)]}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  })


  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      {cartItems}

      <div className="subtotal">
        <p>Subtotal</p>
        <p>Pro Savings</p>
      </div>

      {/*
      <div className="cart-footer">
        <button>Checkout</button>
        <button>Continue Shopping</button>
      </div>
      */}

    </div>
  );
}

export default ShoppingCart;
