import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import api_key from "../apikey"

class Map extends React.Component {
  constructor(props){
    super(props)
    this.defaultCenter = {
      lat: parseFloat(props.latitude),
      lng: parseFloat(props.longitude)
    };
    this.mapStyles = {
      height: "500px",
      width: "100%"
    };
    this.locations = [
      {
        name: props.address,
        location: this.defaultCenter
      }
    ]
  }

  render() {
    return (
      <LoadScript
         googleMapsApiKey={api_key}>
          <GoogleMap
            mapContainerStyle={this.mapStyles}
            zoom={20}
            center={this.defaultCenter}
          >
            {
              this.locations.map(item => {
                return (
                <Marker key={item.name} position={item.location}/>
                )
              })
             }
          </GoogleMap>
       </LoadScript>
    );
  }
}

export default Map;
