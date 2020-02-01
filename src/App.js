import React, {Component} from 'react';
import './App.css';
import {Navbar ,  NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      dishes : DISHES,
    }
  }

  render()
  {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}
}

export default App;
