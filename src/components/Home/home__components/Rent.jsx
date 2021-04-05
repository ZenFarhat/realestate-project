import React from "react";

function Rent() {
  return (
    <div className='search__selectors'>
      <div className='selector'>
        <h3>City</h3>
        <select name='' id=''>
          <option value=''>Melbourne</option>
          <option value=''>Brisbane</option>
          <option value=''>Perth</option>
        </select>
      </div>
      <div className='selector'>
        <h3>Property Type</h3>
        <select name='' id=''>
          <option value=''>Duplex House</option>
          <option value=''>Villa</option>
          <option value=''>Apartment</option>
        </select>
      </div>
      <div className='selector'>
        <h3>Price Range</h3>
        <select name='' id=''>
          <option value=''>$200 p/w</option>
          <option value=''>$300 p/w</option>
          <option value=''>$400 p/w</option>
        </select>
      </div>
      <button className='search__button'>
        <i className='fas fa-search buttonIcon'></i>
      </button>
    </div>
  );
}

export default Rent;
