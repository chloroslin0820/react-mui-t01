import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import './product-card.css';

const ProductCard = ({ image, name, rating, price }) => {

    return (
    <div className="product_card">
      <div className="product_card_img_container">
        <img src={image} />
      </div>
      <div className="product_card_name_container">
        {name}
      </div>
      <div className="product_card_rating_container">
      <Rating name="read-only" value={rating / 2} readOnly />
        {rating}
      </div>
      <div className="product_card_price_container">
        {getSymbolFromCurrency( 'USD' )}
        {price}
      </div>
    </div>
  );
}

export default ProductCard;
