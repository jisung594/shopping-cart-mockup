import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import Results from './Results'
import ProductProfile from './ProductProfile'
import jacketData from '../jackets.json'
import ls from 'local-storage'
import '../App.scss';

class MainContainer extends Component {
  state = {
    jacketsData: jacketData["jackets"],
    clickedJacket: ls.get('clickedJacket') || {},
    cart: ls.get('cart') || []
  }


  clickHandler = (jacketObj) => {
    this.setState({
      clickedJacket: jacketObj
    })

    ls.set("clickedJacket", jacketObj)
  }

  addToCart = (jacketObj) => {
    this.setState({
      cart: [...this.state.cart, jacketObj]
    })

    ls.set("cart", [...this.state.cart, jacketObj])
  }


  // addToCart = (jacketObj) => {
  //   let cartItem = this.state.cart.find(obj => {
  //     return obj.jacket_id === jacketObj.id
  //   })
  //
  //
  //   if (cartItem) {
  //     // IF THIS ITEM IS ALREADY IN CART
  //
  //     let updatedCart = [...this.state.cart]
  //     let i = cartItem.id - 1
  //
  //     updatedCart[i]["count"] = updatedCart[i]["count"] + 1
  //
  //     this.setState({
  //       cart: updatedCart
  //     })
  //   } else {
  //     // IF THIS ITEM ISN'T ALREADY IN CART
  //     // ** Can't check whether a new item has recently been added
  //
  //     this.setState({
  //       cart: [
  //         ...this.state.cart,
  //         { id: this.state.cart.length + 1, jacketId: jacketObj.id, count: 1 }
  //       ]
  //     }
  //     // , () => { this.setState({counter: this.state.counter + 1}) })
  //   }
  // }


  render() {

    console.log(this.state.cart);

    return (
      <div className="main-container">
        <Switch>
          <Route path='/insulated/:id' render={(routerProps)=> {
            let id = routerProps.match.params.id
            let foundJacket = this.state.jacketsData.find(jacketObj => {
              return jacketObj.id === parseInt(id)
            })

            return <ProductProfile jacketObj={foundJacket} addToCart={this.addToCart}/>
          }}/>
          <Route path='/insulated' render={()=> {
            return <Results jacketsList={this.state.jacketsData} clickHandler={this.clickHandler}/>
          }}/>
        </Switch>
        <ShoppingCart/>
      </div>
    );
  }
}

export default MainContainer;
