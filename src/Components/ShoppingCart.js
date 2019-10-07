import React, { setState, useEffect } from 'react';
import CartItem from './CartItem'
import cartIcon from '../shopping-cart-lg.png'

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
      shoppingCart.innerHTML = `<div id="empty-cart">
        <img id="cart-icon" src="" alt="cart icon"/>
        <h2 id="empty-header">Shopping Cart</h2>
        <p id="empty-msg">Your cart is empty</p>
        <button id="continue-btn">Continue Shopping</button>
      </div>`
    }

    let cartImg = document.querySelector("#cart-icon")
    if (cartImg) cartImg.src = cartIcon

    let continueBtn = document.querySelector("#continue-btn")
    if (continueBtn) continueBtn.addEventListener("click", ()=>setOpen(!open))
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
      <h2 className="cart-header">Shopping Cart</h2>

      <div className="cart-items">
        {cartItems}
        {
          !cart.includes(recentlyRemoved) && recentlyRemoved.size
          ? <div className="cart-item">
              <div className="cart-item-col-1">
                <img src={recentlyRemoved.color.img_src} alt="color"/>
              </div>
              <div className="cart-item-col-2">
                <p>{recentlyRemoved.jacket.jacket_name} was removed from your cart.</p>
              </div>
              <div className="update-quantity">
                <span onClick={() => addToCart(recentlyRemoved)}>Undo</span>
              </div>
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
      </div>


      <div className="cart-footer">
        <button>Checkout</button>
        <button id="continue">Continue Shopping</button>
      </div>

    </div>
  );
}

export default ShoppingCart;
