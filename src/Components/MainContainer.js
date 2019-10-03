import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import Results from './Results'
import ProductProfile from './ProductProfile'
import jacketData from '../jackets.json'
import '../App.scss';

class MainContainer extends Component {
  state = {
    jacketsData: jacketData["jackets"],
    clickedJacket: {}
  }

  clickHandler = (jacketObj) => {
    this.setState({
      clickedJacket: jacketObj
    })
  }

  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route path={`/insulated/${this.state.clickedJacket.id}`} render={()=> {
            return <ProductProfile jacketObj={this.state.clickedJacket}/>
          }}/>
          <Route path='/insulated' render={()=> {
            return <Results jacketsList={this.state.jacketsData} clickHandler={this.clickHandler}/>
          }}/>
        </Switch>
        <ShoppingCart />
      </div>
    );
  }
}

export default MainContainer;
