import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const customizeMap = {
  width: "100%",
  height: "100%",
};

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [{ latitude: 35.733007, longitude: 51.376685 }],
    };
  }

  drawMarker = () => {
    return this.state.cords.map((store, i) => {
      return (
        <Marker
          key={i}
          id={i}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("Event Hanlder Called")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={customizeMap}
        zoom={6}
        initialCenter={{
          lat: 9.96233,
          lng: 49.80404,
        }}
      >
        {this.drawMarker()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBcdYHFs5zFCit_ySAHS6WFjKF-ge6F-UE",
})(GoogleMapComponent);
