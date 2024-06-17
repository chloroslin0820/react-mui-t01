import React from 'react';
import './advert.css';
import PicFour from './pic-four/PicFour';
import PicOne from './pic-one/PicOne';

const Advert = ({ id, img, pic_num }) => {
  return (
    <div className="advertfour_main">
      <div className="advertfour_header">
        <span>Up to 70% off | Electronics clearance store</span>
      </div>
        {
            pic_num == 1 
            ? <PicOne id={id} img={img} />
            : <PicFour id={id} img={img} />
        }
      <div className="advertfour_footer">
        <a href="">See more</a>
      </div>
    </div>
  );
}

export default Advert;
