import React, { useState } from "react";
import Buy from "./home__components/Buy";
import Rent from "./home__components/Rent";
import Sell from "./home__components/Sell";

import "../../styles/styles.css";

function Home() {
  const [buy, setBuy] = useState(true);
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);

  const activeBuy = () => {
    setBuy(true);
    setSell(false);
    setRent(false);
  };

  const activeSell = () => {
    setSell(true);
    setBuy(false);
    setRent(false);
  };

  const activeRent = () => {
    setRent(true);
    setSell(false);
    setBuy(false);
  };

  const renderSearch = () => {
    if (buy) {
      console.log("rendered buy");
      return <Buy />;
    } else if (sell) {
      console.log("rendered sell");
      return <Sell />;
    } else if (rent) {
      console.log("rendered rent");
      return <Rent />;
    }
  };

  return (
    <div className='Home'>
      <div className='home__container'>
        <div className='home__text'>
          <h1>Find Your Ideal Home Today</h1>
        </div>
        <div className='home__search'>
          <div className='search__filters'>
            <div>
              <h2
                onClick={activeBuy}
                className={buy ? "filter__text active" : "filter__text"}
              >
                Buy
              </h2>
            </div>
            <div>
              <h2
                onClick={activeSell}
                className={sell ? "filter__text active" : "filter__text"}
              >
                Sell
              </h2>
            </div>
            <div>
              <h2
                onClick={activeRent}
                className={rent ? "filter__text active" : "filter__text"}
              >
                Rent
              </h2>
            </div>
          </div>
          {renderSearch()}
        </div>
      </div>
    </div>
  );
}

export default Home;
