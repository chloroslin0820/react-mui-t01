import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={"/order/" + product.id} key={index}>
            <ProductCard
              image={product.image}
              name={product.name}
              rating={product.rating}
              price={product.price}
            />
          </Link>
        ))
      }
    </div>
  );
}

export default RightPanel;
