import { React, useEffect, useState } from 'react';
import { Products as mockData } from '../../../products-mockdata/ProductMockData.js';
import ProductCard from './product-card/ProductCard';
import './right-panel.css';

const RightPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockData);
  }, []);
    
  return (
    <div className="right_panel">
      {
        products.map((product, index) => (
          <ProductCard 
            key={index}
            image={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
          />
        ))
      }
    </div>
  );
}

export default RightPanel;
