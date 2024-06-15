import { Paper } from '@mui/material';
import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { Products } from '../../products-mockdata/ProductMockData.js';
import './check-page.css';

const CheckPage = () => {
  return (
    <div className="check_page">
        <div className="check_page_left">
            <div className="check_page_left_header">
                <h1>Shopping Cart</h1>
                <hr />
            </div>
            <div className="check_page_paper_container">
                <div className="check_page_paper_container_blank"></div>
                {
                    Products.map((product, index) =>(
                        <div key={index}>
                            <Paper>
                                <div className="check_page_paper_content">
                                    <img src={product.image} />
                                    <div className="check_page_paper_text">
                                        <h3>{product.name}</h3>
                                        <span>{getSymbolFromCurrency( 'USD' )}{product.price}</span>
                                        <h4>In Stock</h4>
                                    </div>
                                </div>
                            </Paper>
                            <hr className="paper_break" />
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="check_page_right">
            <h1>Sub-total (2 items)</h1>
            <span>{getSymbolFromCurrency( 'USD' )}9,999</span>
            <button className="check_page_right_btn">Proceed to Buy</button>
        </div>
    </div>
  );
}

export default CheckPage;
