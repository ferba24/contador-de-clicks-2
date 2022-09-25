import logo from './logo.svg';
import './App.css';
import {Boton} from "./components/Boton";
import {Contador} from "./components/Contador";
import {useState} from "react";

function App() {

  const [cantidadClicks, setCantidadClicks] = useState(0);

  const contador = () => {
    setCantidadClicks = (cantidadClicks + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador numeroClicks={cantidadClicks} />
        <Boton incrementarContador={contador} />
        
      </header>
    </div>
  );
}

export default App;
