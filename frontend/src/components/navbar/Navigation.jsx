import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import LocationBar from './location-bar/LocationBar';
import './navbar.css';
import SearchBar from './search-bar/SearchBar';

class Navbar extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {
            isWideScreen: window.innerWidth > 1248
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({ isWideScreen: window.innerWidth > 1248});
    }

    render() {
        let { size } = this.context;
        const { isWideScreen } = this.state;

        return (
            <div>
                <div className="navbar_component">
                    <>
                        <Link to="/">
                            <div className="navbar_logo"></div>
                        </Link>

                        {isWideScreen && <LocationBar />}

                        {isWideScreen && <SearchBar />}

                        <div className="navbar_right">
                            <div className="navbar_right_sign_in">
                                <h6>Hello, Sign In</h6>
                                <span>Account & Lists</span>
                            </div>
                            <div className="navbar_right_return">
                                <h6>Returns</h6>
                                <span>& Order</span>
                            </div>

                            <div className="person_icon">
                                <PersonOutlineIcon fontSize="large" />
                            </div>
                            
                            <div className="navbar_right_cart">
                                <div className="cart_img"></div>
                                <span className="cart_badge">{size}</span>
                                <span className="text">Cart</span>
                            </div>
                        </div>
                    </>

                    {!isWideScreen && <SearchBar />}

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

                {!isWideScreen && <LocationBar />}

            </div>
            
        );
    }
}

export default Navbar;
