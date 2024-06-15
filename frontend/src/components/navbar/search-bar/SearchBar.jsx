import React from 'react';
import './search-bar.css';

const SearchBar = () => {
  return (
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
  );
}

export default SearchBar;
