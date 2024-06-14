import React, { Component } from 'react';
import Advert from './advert/Advert';
import './mainpage.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="mainpage">
                <img src="https://ik.imagekit.io/chlorosimg/amazon-image/1348517_in_prime_2_pd_3000x1200_Eng._CB663273097_.jpg.png?updatedAt=1718343850539" className="mainpage_bg_image" />
                <div className="advert_container">
                    <Advert pic_num="1" />
                    <Advert pic_num="4" />
                    <Advert pic_num="1" />
                    <Advert pic_num="4" />
                    <Advert pic_num="1" />
                    <Advert pic_num="4" />
                    <Advert pic_num="1" />
                    <Advert pic_num="4" />
                </div>
            </div>
        );
    }
}

export default MainPage;