import ReorderIcon from '@mui/icons-material/Reorder';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './navbar.css';

class Navbar extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { items, size, increment } = this.context;

        return (
            <div>
                <div className="navbar_component">
                    <Link to="/">
                        <div className="navbar_logo"></div>
                    </Link>

                    <div className="navbar_locator">
                        <div className="navbar_locator_image"></div>
                        <div className="navbar_location">
                            <h6>Deliver to</h6>
                            <span>Locating your place</span>
                        </div>
                    </div>

                    <div className="navbar_search_component">
                        <div>
                            <select className="navbar_search_dropdown">
                                <option value="all">ALL</option>
                                <option value="alexa">Alexa</option>
                                <option value="books">Books</option>
                                <option value="baby">Baby</option>
                                <option value="beauty">Beauty</option>
                                <option value="clothes">Clothes</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" className="navbar_search_box" />
                        </div>
                        <div className='navbar_search_icon_container'>
                            <div className="navbar_search_icon"></div>
                        </div>
                    </div>

                    <div className="navbar_right">
                        <div className="navbar_right_sign_in">
                            <h6>Hello, Sign In</h6>
                            <span>Account & Lists</span>
                        </div>
                        <div className="navbar_right_return">
                            <h6>Returns</h6>
                            <span>& Order</span>
                        </div>
                        <div className="navbar_right_cart">
                            <div className="cart_img"></div>
                            <span className="cart_badge">{size}</span>
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
                <dir className="navbar_footer">
                    <div className="navbar_footer_menu">
                        <ReorderIcon />
                        <div className="navbar_footer_text"><span>All</span></div>
                    </div>
                    <div className="navbar_footer_text"><span>Best Seller</span></div>
                    <div className="navbar_footer_text"><span>Mobile</span></div>
                    <div className="navbar_footer_text"><span>Amazon Pay</span></div>
                    <div className="navbar_footer_text"><span>Fashion</span></div>
                    <div className="navbar_footer_text"><span>Electronics</span></div>
                    <div className="navbar_footer_text"><span>Prime</span></div>
                    <div className="navbar_footer_text"><span>New Release</span></div>
                    <div className="navbar_footer_text"><span>Customer Service</span></div>
                    <div className="navbar_footer_text"><span>Computers</span></div>
                    <div className="navbar_footer_text"><span>Home & Kitchen</span></div>
                </dir>
            </div>
            
        );
    }
}

export default Navbar;
