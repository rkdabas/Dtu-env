import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "../App.css";

function Weather() {
  return (
    <React.Fragment>
      <div className="container1">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default Weather;