import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoriesContext = createContext(); //akta context create korlam tarpor pura areatak context provider(CategoriesContext.Provider) ar vitore rekhe dece and tar akta value dece (laptop) provider er value akadhik set kora jay array akareo set kora jay

function App() {
  const [category,setCategory] = useState('laptop')
  return (
    <CategoriesContext.Provider value={[category,setCategory]}> 
      <header className="App-header">
        <p>count value: {category}</p>
        <Header  ></Header>
        <Home ></Home>
        <Shipment></Shipment>
        {/* app.js a lokho kora jay shipmant e ccc name e akta variable declear kora same variable shipmant.js s props recive korbe */}
      </header>
    </CategoriesContext.Provider>
  );
}

export default App;
