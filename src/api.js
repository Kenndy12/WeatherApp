const API_KEY = "236c5bb5fbb465401ffa768d9fab31e0";

const getWeatherData = async(city, unit="metric") => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;

    const data = await fetch(URL).
    then((res) => res.json()).
    then((data) => data);

    console.log(data);
}

export default getWeatherData;