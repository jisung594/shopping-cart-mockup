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
    ls.set("clickedJacket", jacketObj)

    this.setState({
      clickedJacket: jacketObj
    })
  }

  addToCart = (obj) => {
    ls.set("cart", [...this.state.cart, obj])

    this.setState({
      cart: [...this.state.cart, obj]
    })
  }

  removeFromCart = (obj) => {
    let toBeRemoved = this.state.cart.find(item => {
      return item === obj
    })

    let updatedCart = this.state.cart.filter(item => {
      return item !== toBeRemoved
    })


    ls.set("cart", updatedCart)

    this.setState({
      cart: updatedCart
    })

    // let updatedCart = this.state.cart.splice()
  }


  render() {
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
        <ShoppingCart cart={this.state.cart} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
      </div>
    );
  }
}

export default MainContainer;
