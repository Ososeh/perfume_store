import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <div className="content">
          <Sidebar />
          <ProductGrid />
        </div>
      </main>
    </div>
  );
}

export default App;
