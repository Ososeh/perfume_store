import React from 'react';
import '../styles/ProductGrid.css';
import '../styles/Banner.css';

const products = [
  { name: 'COCO MADEMOISELLE CHANEL PARIS', price: '₦345', image: 'sabo1.jpg' },
  { name: 'Loafers 967', price: '₦436', image: 'loafers.jpg' },
  { name: 'Sabo 184', price: '₦238', image: 'sabo2.jpg' },
  { name: 'Shoes 345', price: '₦369', image: 'shoes1.jpg' },
  { name: 'Sabo 245', price: '₦445', image: 'sabo3.jpg' },
  { name: 'Loafers 245', price: '₦545', image: 'loafers2.jpg' },
  { name: 'Sandals 345', price: '₦245', image: 'sandals1.jpg' },
  { name: 'Shoes 685', price: '₦545', image: 'shoes2.jpg' },
];

function ProductGrid() {
  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={`https://hips.hearstapps.com/hmg-prod/images/coco-mademoiselle-perfume-chanel-1675113242.png`} width={180} height={180} alt="COCO MADEMOISELLE CHANEL PARIS"  />
          <div className="product-info">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductGrid;
