import React from "react";

import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

import Map from './map'

const Property = () => {
  const location = useLocation();
  let property;

  try{
    property = location.state.property;
  }catch(e){
    console.log(e)
  }


  if(property){
    return (
      <div className="row">
        <div className="col-sm-12 ">
          <div className="property">
            <h1>{property.address}, {property.location} {property.state}</h1>
            <div className="row">
              <div className="col-sm-4 property-details">
                <label>
                  Property Type
                </label>
                <p>
                  {property.property_type}
                </p>
                <label>
                  Zip
                </label>
                <p>
                  {property.zip}
                </p>
                <label>
                  Price
                </label>
                <p>
                  ${property.price}
                </p>
                <label>
                  Square Feet
                </label>
                <p>
                  {property.square_feet}
                </p>
                <p>
                  <a href={property.url} target="_blank" rel="noreferrer"> Link to property</a>
                </p>
              </div>
              <div className="col-sm-8">
                <Map latitude={property.latitude} longitude={property.longitude} address={property.address} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }else{
    return(
      <div className="joke">
        Oh no we couldn't find this property!
        <br/>
        <Link to="/home">Go home</Link>
      </div>
    )
  }
}

export default Property;
