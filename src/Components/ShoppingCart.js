import React from 'react';
import '../App.scss';

const ShoppingCart = () => {
  // let { } = props;

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      <div className="subtotal">
        <div>
          <p>Subtotal</p>
          <p>Pro Savings</p>
        </div>
        <div>
          <p>{"..."}</p>
          <p>{"..."}</p>
        </div>
      </div>

      <button>Checkout</button>
      <button>Continue Shopping</button>

    </div>
  );
}

export default ShoppingCart;
