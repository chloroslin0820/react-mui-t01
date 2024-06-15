import getSymbolFromCurrency from 'currency-symbol-map';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import './check-page.css';
import CheckOutItem from './checkout-item/CheckOutItem.jsx';

const CheckPage = () => {
  const { items, size, increment } = useContext(CartContext);
  const calSubtotal = () => {
    let price = 0;
    for (let i = 0; i < items.length; i++) {
        const itemPrice = parseFloat(items[i].price);
        if (!isNaN(itemPrice)) {
            price += itemPrice;
        }
    }
    return price;
  }

  return (
    <div className="check_page">
        <div className="check_page_left">
            <div className="check_page_left_header">
                <h1>Shopping Cart</h1>
                <hr />
            </div>
            {
                items.map((item, index) => (
                    <CheckOutItem key={index} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
        <div className="check_page_right">
            <h1>Sub-total ({ size } items)</h1>
            <span>{getSymbolFromCurrency( 'USD' )}{calSubtotal()}</span>
            <button className="check_page_right_btn">Proceed to Buy</button>
        </div>
    </div>
  );
}

export default CheckPage;
