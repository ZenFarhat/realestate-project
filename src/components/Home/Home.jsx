import React from "react";
import "../../styles/styles.css";

function Home() {
  return (
    <div className='Home'>
      <div className='home__container'>
        <div className='home__text'>
          <h1>Find Your Ideal Home Today</h1>
        </div>
        <div className='home__search'>
          <div className='search__filters'>
            <div>
              <h2>Buy</h2>
            </div>
            <div>
              <h2>Sell</h2>
            </div>
            <div>
              <h2>Rent</h2>
            </div>
          </div>
          <div className='search__selectors'>
            <div className='selector'>
              <h3>City/Street</h3>
              <select name='' id=''>
                <option value=''>Melbourne</option>
              </select>
            </div>
            <div className='selector'>
              <h3>Property Type</h3>
              <select name='' id=''>
                <option value=''>Duplex House</option>
              </select>
            </div>
            <div className='selector'>
              <h3>Price Range</h3>
              <select name='' id=''>
                <option value=''>$300,000-$400,000</option>
              </select>
            </div>
            <button className='search__button'>
              <i class='fas fa-search'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
