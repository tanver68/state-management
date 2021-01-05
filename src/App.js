import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </header>
    </div>
  );
}

export default App;
