import { useEffect } from "react";
import getWeatherData from "./api";

function App() {

  useEffect(() => {
    const fetchWeatherData = async() => {
      const data = await getWeatherData("paris");
    }
    fetchWeatherData();
  }, [])

  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;