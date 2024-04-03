import React from 'react';
import './App.css';
import TarjetasProductos from './TarjetasProductos';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <h1>Mi Tienda de Productos</h1>
      <Navbar />
      <TarjetasProductos />
    </div>
  );
}

export default App;
