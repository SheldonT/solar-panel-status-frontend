import { useState, useEffect } from 'react';
import OutputField from "./components/ouputField";
// https://pixabay.com/vectors/solar-cells-sun-solar-ecology-157122/
import solarPanel from "./assets/solar-cells-157122_1280.png";
// https://pixabay.com/vectors/battery-smf-sealed-maintenance-free-311018/
import battery from "./assets/battery-311018_1280.png";
//https://pixabay.com/vectors/charging-point-charger-7410950/
import charger from "./assets/charging-point-7410950_1280.png"
import './App.css';

function App() {


  return (
    <div className="main">
      <div className="header">
        <h1>Solar Panel Status</h1>
      </div>
      <div className="processFlow">
        <img className="solarImage" src={solarPanel} alt="Solar Panels" />
        <div className="wire"></div>
        <div className="sensors">
          <OutputField title={"Voltage"} event={"voltage"} serialCommand={"V,1;"} hihi={20} hi={14.5} lo={10} loLo={5} /> 
          <OutputField title={"Current"} event={"current"} serialCommand={"C,1;"} hihi={20} hi={9} lo={0.1} lolo={0} />
        </div>
        <div className="wire"></div>
        <img className="chargerImage" src={charger} alt="battery" />
        <div className="wire"></div>

        <div className="sensors">
          <OutputField title={"Voltage"} event={"battery_voltage"} serialCommand={"V,1;"} hihi={20} hi={14.5} lo={10} loLo={5} />
          <OutputField title={"Current"} event={"battery_current"} serialCommand={"C,1;"} hihi={20} hi={9} lo={0.1} lolo={0} />
        </div>
        <div style={{width: "10%", borderStyle: "solid", marginBottom: "5%"}}></div>
        <img className="batteryImage" src={battery} alt="battery" />
      </div>
    </div>
  )
}

export default App
