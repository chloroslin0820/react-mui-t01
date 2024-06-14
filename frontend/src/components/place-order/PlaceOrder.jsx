import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react';
import { Products } from '../../products-mockdata/ProductMockData.js';
import './place-order.css';

const PlaceOrder = () => {
  let arr = 1;

  return (
    <div className="place_order">
      <Grid container>
        <>
          <Grid item xs={5}>
            <div className="place_order_img_grid">
              <img className="place_order_img" src={Products[arr].image} />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="place_order_detail">
              <div className="place_order_name">{Products[arr].name}</div>
              <div className="place_order_rating_row">
                <Rating name="read-only" value={Products[arr].rating / 2} readOnly />
                <div>{Products[arr].rating}</div>
              </div>
              <hr />
              <div className="place_order_price">
                <p>Price: <span>{getSymbolFromCurrency( 'USD' )}{Products[arr].price}</span></p>
                <p>FREE delivery: Wednesday, Aug 18</p>
                <p>EMI starts at {getSymbolFromCurrency( 'USD' )}{Products[arr].price - 5432}. No Cost EMI available</p>
              </div>
              <hr />
              <div className="place_order_attention">
                <h4>This item cannot be shipped to your selected delivery location.</h4>
                <h4>Please choose a different delivery location.</h4>
              </div>
              <hr />
              <div className="product_features">
                <div className="feature_row">
                  <span>Special Feature:</span>
                  <p>Cycle Tracking, Activity Tracker, GPS, Voice Control, Heart Rate Monitor</p>
                </div>
                <div className="feature_row">
                  <span>Connectivity Technology:</span>
                  <p>Wi-Fi</p>
                </div>
                <div className="feature_row">
                  <span>Battery Cell Composition:</span>
                  <p>Lithium Ion</p>
                </div>
                <div className="feature_row">
                  <span>GPS:</span>
                  <p>Built-in GPS</p>
                </div>
                <div className="feature_row">
                  <span>Shape:</span>
                  <p>Rectangular</p>
                </div>
                <div className="feature_row">
                  <span>Screen Size:</span>
                  <p>40 Millimeters</p>
                </div>
                <div className="feature_row">
                  <span>Brand:</span>
                  <p>Apple</p>
                </div>
                <div className="feature_row">
                  <span>Model Name:</span>
                  <p>Apple Watch SE (2nd Generation, GPS)</p>
                </div>
                <div className="feature_row">
                  <span>Style:</span>
                  <p>S/M - fits 130–180mm wrists</p>
                </div>
                <div className="feature_row">
                  <span>Color:</span>
                  <p>Midnight Aluminum Case with Midnight Sport Band</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div className="place_order_paper upper">
              <Paper variant="elevation" elevation={0}>
                <p>No featured offers available</p>
                <a href="">Learn more</a>
              </Paper>
            </div>
            <div className="place_order_paper lower">
              <Paper variant="outlined">
                <h4>
                  This item cannot be shipped to your selected delivery location.
                  Please choose a different delivery location.
                </h4>
                <div className="place_order_purchase">
                  <button className="place_order_btn add">Add to Cart</button>
                  <hr />
                  <button className="place_order_btn buy">Buy Now</button>
                </div>
              </Paper>
            </div>
          </Grid>
        </>
      </Grid>
    </div>
  );
}

export default PlaceOrder;
