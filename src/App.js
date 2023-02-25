import { useEffect, useState } from "react";
import getWeatherData from "./api";
import coldBg from "./assets/cold.jpg";
import hotBg from "./assets/hot.jpg";
import Descriptions from "./components/Descriptions";

function App() {

  const [city, setCity] = useState("Paris")
  const[weatherData, setWeatherData] = useState(null);
  const[tempUnit, setTempUnit] = useState("metric");
  const [background, setBackground] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async() => {
      const data = await getWeatherData(city, tempUnit);
      setWeatherData(data);
      
      const threshold = tempUnit === "metric" ? 20 : 60;
      if(weatherData.temp <= threshold) {
        setBackground(coldBg)
      } 
      else {
        setBackground(hotBg)
      }
    }
    fetchWeatherData();
  }, [tempUnit, city])

  const handleUnitClicked = (e) => {
      const button = e.currentTarget;
      const currentTempUnit = button.innerText.slice(1);
      console.log(currentTempUnit);

      const isCelcius = currentTempUnit === "C";
      button.innerText = isCelcius ? "°F" : "°C";
      setTempUnit(isCelcius ? "imperial" : "metric");
  }

  const enterClicked = (e) => {
    if(e.keyCode == 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <div className="app" style={{backgroundImage:`url(${background})`}}>
      <div className="overlay"> 
        {weatherData && (
            <div className="container">
            <div className="section section_inputs">
              <input onKeyDown={enterClicked} type="text" name="city" placeholder="Enter the city"></input>
              <button onClick={handleUnitClicked}>°C</button>
            </div>
  
            <div className="section section_temperature">
              <div className="icon">
                <h3>{`${weatherData.name},${weatherData.country}`}</h3>
                <img src={weatherData.iconURL} alt="Weather Icon"></img>
                <h3>{weatherData.description}</h3>
              </div>
  
              <div className="temperature">
                <h1>{Math.round(weatherData.temp)} °{tempUnit === "metric" ? "C" : "F"}</h1>
              </div>
            </div>
  
            {/* Bottom Description */}
            <Descriptions weatherData={weatherData} tempUnit={tempUnit}/>
          </div>
        )
        }  
      </div>
    </div>
  );
}

export default App;