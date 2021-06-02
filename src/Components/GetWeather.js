import React, { useEffect, useState } from "react";
import axios from "axios"
import { render } from "@testing-library/react";
import { SettingsInputComponentTwoTone } from "@material-ui/icons";


function GetWeather() {
    
    
       
       useEffect(() => {
           fetchData()
       }, []);
       
       
       const fetchData = async () => {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=317d732a603b454f008500e353c48daf');
        const data = await response.json();
        setTemp(data.main.temp);
        setTempMax(data.main.temp_max);
        setTempMin(data.main.temp_min);
        setIcon(data.weather[0].icon)
       }

            
       const [temp, setTemp] = useState ([])
       const [temp_max, setTempMax] = useState ([])
       const [temp_min, setTempMin] = useState ([])
       const [icon, setIcon] = useState ([])
       
      const roundedTemp = Math.round(temp)
      const roundedTempMax = Math.round(temp_max)
      const roundedTempMin = Math.round(temp_min)
       

        return (
        
         
        <>
          <img className="temp-display" id="temp-icon" src={`http://openweathermap.org/img/w/${icon}.png`}/>
          <div className="temp-display" id="temp-main">{roundedTemp}°C</div>
          <div className="temp-display" id="temp-max">{roundedTempMax}°</div>
          <div className="temp-display" id="temp-min">{roundedTempMin}°</div>
        </>
        
         )

        
}

        
export default GetWeather