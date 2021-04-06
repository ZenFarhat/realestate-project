import React from "react";
import "../../../styles/styles.css";

function Property(props) {
  return (
    <div className='property'>
      <div>
        <img src={props.img} alt='property' className='property__img' />
      </div>
      <div className='property__text'>
        <p className='property__type'>{props.type}</p>
        <p className='property__price'>${props.price}</p>
        <p className='property__features'>{props.features}</p>
      </div>
      <p className='property__address'>{props.address}</p>
    </div>
  );
}

export default Property;
