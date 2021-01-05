import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>count value: {count}</p>
        <Header count={count} setCount={setCount}></Header>
        <Home count = {count}></Home>
        <Shipment ccc={count}></Shipment>
      </header>
    </div>
  );
}

export default App;
