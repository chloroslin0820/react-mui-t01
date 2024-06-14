import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="footer">
                <div className="footer_sign_in">
                    <div className="footer_sign_in_box">
                        <h5>See personalized recommendations</h5>
                        <a href="">
                            <button className="footer_sign_in_btn">
                                Sign in
                            </button>
                        </a>
                        <h6>New customer? <a href=""><span>Start here</span></a></h6>
                    </div>
                </div>

                <div className="footer_back_to_top">
                    <a href="#">Back to top</a>
                </div>

                <div className="footer_info">
                    <article>
                        <span>Get to Know Us</span>
                        <a href="">Careers</a>
                        <a href="">Blog</a>
                        <a href="">About Amazon</a>
                        <a href="">Investor Relations</a>
                        <a href="">Amazon Devices</a>
                        <a href="">Amazon Science</a>
                    </article>
                    <article>
                        <span>Make Money with Us</span>
                        <a href="">Sell products on Amazon</a>
                        <a href="">Sell on Amazon Business</a>
                        <a href="">Sell apps on Amazon</a>
                        <a href="">Become an Affiliate</a>
                        <a href="">Advertise Your Products</a>
                        <a href="">Self-Publish with Us</a>
                        <a href="">Host an Amazon Hub</a>
                        <a href="">› See More Make Money with Us</a>
                    </article>
                    <article>
                        <span>Amazon Payment Products</span>
                        <a href="">Amazon Business Card</a>
                        <a href="">Shop with Points</a>
                        <a href="">Reload Your Balance</a>
                        <a href="">Amazon Currency Converter</a>
                    </article>
                    <article>
                        <span>Let Us Help You</span>
                        <a href="">Amazon and COVID-19</a>
                        <a href="">Your Account</a>
                        <a href="">Your Orders</a>
                        <a href="">Shipping Rates & Policies</a>
                        <a href="">Returns & Replacements</a>
                        <a href="">Manage Your Content and Devices</a>
                        <a href="">Amazon Assistant</a>
                        <a href="">Help</a>
                    </article>
                </div>

                <div className="footer_language_option">
                    <div className="footer_language_option_logo"></div>
                    <div className="footer_language_option_list">
                    <a href="">Australia</a>
                    <a href="">Belgium</a>
                    <a href="">Brazil</a>
                    <a href="">Canada</a>
                    <a href="">China</a>
                    <a href="">Germany</a>
                    <a href="">India</a>
                    <a href="">Italy</a>
                    <a href="">Japan</a>
                    <a href="">Korea</a>
                    <a href="">Mexico</a>
                    <a href="">Poland</a>
                    <a href="">Saudi Arabia</a>
                    <a href="">Singapore</a>
                    <a href="">Spain</a>
                    <a href="">Turkey</a>
                    <a href="">United Kingdom</a>
                    <a href="">United States</a>
                    </div>
                </div>

                <div className="footer_end_part">
                    <div className="footer_end_upper">
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>Amazon Music</h5>
                                    <h6>Stream millions of songs</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>Amazon Ads</h5>
                                    <h6>Reach customers wherever they spend their time</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>6pm</h5>
                                    <h6>Score deals on fashion brands</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>AbeBooks</h5>
                                    <h6>Books, art & collectibles</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>Amazon Business</h5>
                                    <h6>Everything For Your Business</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>Kindle Direct Publishing</h5>
                                    <h6>Indie Digital & Print Publishing Made Easy</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>AShopbop</h5>
                                    <h6>Designer Fashion Brands</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>Amazon Subscription Boxes</h5>
                                    <h6>Top subscription boxes – right to your door</h6>
                                </a>
                            </article>
                        </div>
                        <div className="footer_end_upper_article_container">
                            <article>
                                <a>
                                    <h5>PillPack</h5>
                                    <h6>Pharmacy Simplified</h6>
                                </a>
                            </article>
                        </div>
                    </div>
                    <div className="footer_end_lower">
                        <div className="footer_end_lower_links">
                            <a href=""><h6>Conditions of use</h6></a>
                            <a href=""><h6>Privacy Notice</h6></a>
                            <a href=""><h6>Consumer Health Data Policy Disclosure</h6></a>
                            <a href=""><h6>Your Ads Privacy Choice</h6></a>
                        </div>
                        <p className="footer_end_lower_copyright">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;