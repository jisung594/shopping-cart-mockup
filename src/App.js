import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import './App.scss';

function App() {
  let [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar open={open} setOpen={setOpen}/>
        <MainContainer open={open} setOpen={setOpen}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
