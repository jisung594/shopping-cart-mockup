import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <MainContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
