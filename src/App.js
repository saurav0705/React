import React from 'react';
import './App.css';
import {Navbar ,  NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <NavbarBrand href="\">Ristorante Con Fusion</NavbarBrand>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
