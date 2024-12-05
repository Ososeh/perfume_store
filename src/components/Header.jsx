import React from 'react';
import '../styles/Header.css';
import '../styles/Banner.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">MAVEN STUDIO</div>
      <nav className="nav">
        <a href="#new-arrivals">New Arrivals</a>
        <a href="#catalog">Catalog</a>
        <a href="#sale">Sale</a>
      </nav>
      <div className="cart">
        <a href="#shop-now">Shop Now</a>
        <span className="cart-icon">🛒</span>
      </div>
    </header>
  );
}

export default Header;
