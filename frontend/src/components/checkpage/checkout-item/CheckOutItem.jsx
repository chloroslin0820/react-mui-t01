import { Paper } from '@mui/material';
import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import './checkout-item.css';

const CheckOutItem = ({ image, name, price }) => {
  return (
    <div className="check_page_paper_container">
        <div className="check_page_paper_container_blank"></div>
            <div>
                <Paper>
                    <div className="check_page_paper_content">
                        <img src={image} />
                        <div className="check_page_paper_text">
                            <h3>{name}</h3>
                            <span>{getSymbolFromCurrency( 'USD' )}{price}</span>
                            <h4>In Stock</h4>
                        </div>
                    </div>
                </Paper>
                <hr className="paper_break" />
            </div>
    </div>
  );
}

export default CheckOutItem;
