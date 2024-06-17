import React from 'react';
import { Link } from 'react-router-dom';
import './pic-one.css';

const PicOne = ({ id, img }) => {
  return (
    <div className="pic_one_container">
      <Link to={"/display"}><img src={img} /></Link>
    </div>
  );
}

export default PicOne;
