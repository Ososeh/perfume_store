import React from 'react';
import '../styles/Banner.css';
import shoeImage from '../assets/images/elevate-your-essence-find-your-signature-fragrance-today.jpg'; // Replace with the actual image

function Banner() {
  return (
    <section className="banner">
      <img src={shoeImage} alt="Shoes" className="banner-image" />
      {/* <h1 className="banner-text">ELEVATE YOUR SPRING STYLE</h1> */}
    </section>
  );
}

export default Banner;
