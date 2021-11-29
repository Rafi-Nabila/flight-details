import React, { useEffect, useState } from "react";
import BpkText from "bpk-component-text";

import Header from "../Header";
import Card from "../Card";

import STYLES from "./App.scss";

import getData from "../..";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const App = () => {
  const [flightData, setFlightData] = useState();
  useEffect(() => {
    setFlightData([...getData()]);
  }, []);

  if (!flightData) {
    return null
  }
  
  return ( 
    <div className={getClassName("App")}>
      <Header />
      <main className={getClassName("App__main")}>
        {/* TODO: Add a component to display results here */}
        {flightData &&flightData.map((c, index) => <Card data={c} key={index}/>)}
      </main>
    </div>
  );
};

export default App;
