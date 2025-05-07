import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount]  = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setCount(data.length);             
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-container">
      <div className="productcountpart">  
        <label><b>Newly Arrivals: {count}</b></label>
      </div>

      <h2 className="product-title">Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img 
              className="product-image" 
              src={product.image} 
              alt={product.title} 
            />
            <h4 className="product-name">{product.title}</h4>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
