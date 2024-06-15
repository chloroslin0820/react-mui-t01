import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import './location-bar.css';

const LocationBar = () => {
  return (
    <div className="navbar_locator">
        <div className="navbar_locator_image"></div>
        <div className="navbar_location">
            <h6>Deliver to</h6>
            <span>Locating your place</span>
            <div className="down_arrow">
                <KeyboardArrowDownIcon />
            </div>
        </div>
    </div>
  );
}

export default LocationBar;
