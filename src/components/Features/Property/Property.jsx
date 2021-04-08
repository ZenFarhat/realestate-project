import React from "react";
import "../../../styles/styles.css";

function Property(props) {
  return (
    <div className='property'>
      <img src={props.img} alt='property' className='property__img' />
      <div className='property__text'>
        <h1 className='property__title'>{props.title}</h1>
        <p className='property__type'>Property Type: {props.type}</p>
        <p className='property__price'>
          Price: <strong>$</strong>
          {props.price}
        </p>
        <p className='property__features'>Features: {props.features}</p>
        <p className='property__address'>
          <i class='fas fa-map-marker-alt addressIcon'></i> Location:{"  "}
          {props.address}
        </p>
      </div>
    </div>
  );
}

export default Property;
