import "bpk-stylesheets";
import "bpk-stylesheets/font";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import flightData from "./flights.json";
import {ReturnStopText, TimeConvert, ReturnTime} from './helper';

ReactDOM.render(React.createElement(App), document.getElementById("root"));

/* Create functionality in a sensible file to do the following:
 * TODO - retrieve the results from the provided flight.json
 * TODO - a better format for displaying results to the results page.
 */

const getData = () => {
  const { legs, itineraries } = flightData;

  const returnLegs = (leg, callback) => leg.map((leg) => callback(legs.find((l) => l.id === leg)));
  
  const formatLegs = (data) => ({
    id: data.id,
    arrival_airport: data.arrival_airport,
    arrival_time: ReturnTime(data.arrival_time),
    departure_airport: data.departure_airport,
    departure_time: ReturnTime(data.departure_time),
    duration: TimeConvert(data.duration_mins),
    stops: ReturnStopText(data.stops)
  })

   return itineraries.map((item) => (
    {
      price: item.price,
      agent: item.agent,
      legs: returnLegs(item.legs, formatLegs),
    }
  ));

};

export default getData;
