import React from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css';
import Hero from './components/Hero.jsx';
import FilterC from './components/FilterC.jsx';
import Card from './components/Card.jsx';
import Carouselnum from './components/Carouselnum.jsx';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div>
        <Navbar/>
        <Hero/>
        <FilterC/>
        <Carouselnum/>
        <Card/>
      </div>
    </ProductProvider>
  );
}

export default App;