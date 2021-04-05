import React from "react";

function Sell() {
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
        <h3>Evaluated Price</h3>
        <select name='' id=''>
          <option value=''>$300,000-$400,000</option>
          <option value=''>$400,000-$500,000</option>
          <option value=''>$500,000-$600,000</option>
        </select>
      </div>
      <button className='search__button'>
        <i className='fas fa-money-bill-wave buttonIcon'></i>
      </button>
    </div>
  );
}

export default Sell;
