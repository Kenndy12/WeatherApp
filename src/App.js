import { useEffect, useState } from "react";
import getWeatherData from "./api";
import coldBg from "./assets/cold.jpg";
import hotBg from "./assets/hot.jpg";
import Descriptions from "./components/Descriptions";

function App() {

  const[weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async() => {
      const data = await getWeatherData("paris");
      setWeatherData(data);
      console.log(data); 
    }
    fetchWeatherData();
  }, [])

  return (
    <div className="app" style={{backgroundImage:`url(${coldBg})`}}>
      <div className="overlay"> 
        <div className="container">
          <div className="section section_inputs">
            <input type="text" name="city" placeholder="Enter the city"></input>
            <button>°F</button>
          </div>

          <div className="section section_temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Weather Icon"></img>
              <h3>Few Clouds</h3>
            </div>

            <div className="temperature">
              <h1>26°C</h1>
            </div>
          </div>

          {/* Bottom Description */}
          <Descriptions/>
        </div>
      </div>
    </div>
  );
}

export default App;