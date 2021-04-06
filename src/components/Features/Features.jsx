import React from "react";
import "../../styles/styles.css";
import Property from "./Property/Property";
import property1 from "../../Media/property1.jpg";
import property2 from "../../Media/property2.jpg";
import property3 from "../../Media/property3.jpg";
import property4 from "../../Media/property4.jpg";
import property5 from "../../Media/property5.jpg";
import property6 from "../../Media/property6.jpg";

function Features() {
  return (
    <div className='Features section' id='features'>
      <h1 className='section__heading'>Featured Homes</h1>
      <hr className='blueHr' />
      <div className='features__container'>
        <Property
          img={property1}
          type='Villa'
          price='450,000'
          features='4BED 2BATH'
          address='123 Fake St, Suburb, 3012'
        />
        <Property
          img={property2}
          type='Villa'
          price='400P/W'
          features='3BED 2BATH'
          address='456 Notreal St, Suburb, 3213'
        />
        <Property
          img={property3}
          type='Duplex'
          price='280,000'
          features='2BED 2BATH'
          address='789 Phony Rd, Suburb, 3333'
        />
        <Property
          img={property4}
          type='Villa'
          price='380,000'
          features='3BED 3BATH'
          address='123 Doesntexist St, Suburb, 3992'
        />
        <Property
          img={property5}
          type='Villa'
          price='500,000'
          features='4BED 3BATH'
          address='123 Unreal St, Suburb, 3221'
        />
        <Property
          img={property6}
          type='Villa'
          price='300,000'
          features='3BED 2BATH'
          address='711 Fake St, Suburb, 992'
        />
      </div>
    </div>
  );
}

export default Features;
