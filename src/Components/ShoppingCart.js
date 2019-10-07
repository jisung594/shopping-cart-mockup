import React, { useEffect } from 'react';
import CartItem from './CartItem'
import '../App.scss';

const ShoppingCart = (props) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    recentlyRemoved,
    open,
    setOpen
  } = props;

  useEffect(() => {
    open ? openCart() : closeCart()

    emptyCart()
  })

  const emptyCart = () => {
    const shoppingCart = document.querySelector(".shopping-cart")

    if (!cart.length) {
      shoppingCart.innerHTML = `<div>
        <h2>Your cart is empty</h2>
      </div>`
    }
  }


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

  const subTotal = cart.reduce((sum,item) => {
    return sum + item.jacket.pro_price
  }, 0)

  const proSavings = cart.reduce((sum,item) => {
    return sum + (item.jacket.retail_price - item.jacket.pro_price)
  }, 0)


  const openCart = () => {
    let cartContainer = document.querySelector(".shopping-cart")
    cartContainer.classList.remove("close")
    cartContainer.classList.add("open")
  }

  const closeCart = () => {
    let cartContainer = document.querySelector(".shopping-cart")
    cartContainer.classList.add("close")
  }

  return (
    <div className="shopping-cart">
      <label id="close-button" onClick={()=>setOpen(!open)}>✕</label>
      <h2 id="cart-header">Shopping Cart</h2>

      <div className="cart-items">
        {cartItems}
        {
          !cart.includes(recentlyRemoved) && recentlyRemoved.size
          ? <div>
              <h2>{recentlyRemoved.jacket.jacket_name} ({recentlyRemoved.color}, {recentlyRemoved.size}) was removed from your cart.</h2>
              <button onClick={() => addToCart(recentlyRemoved)}>Undo</button>
            </div>
          : null
        }
      </div>

      <div className="price">
        <div className="subtotal">
          <p>Subtotal</p>
          <p>${subTotal}</p>
        </div>

        <div className="pro-savings">
          <p>Pro Savings</p>
          <p>${proSavings}</p>
        </div>
        {/*<div>
          <p>Subtotal</p>
          <p className="pro-savings">Pro Savings</p>
        </div>

        <div>
          <p>${subTotal}</p>
          <p className="pro-savings">${proSavings}</p>
        </div>*/}
      </div>


      <div className="cart-footer">
        <button>Checkout</button>
        <button id="continue">Continue Shopping</button>
      </div>

    </div>
  );
}

export default ShoppingCart;
