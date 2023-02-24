const API_KEY = "236c5bb5fbb465401ffa768d9fab31e0";

const makeIconURL = (iconID) => {

    return `https://openweathermap.org/img/wn/${iconID}@2x.png`
}

const getWeatherData = async(city, unit="metric") => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;

    const data = await fetch(URL).
    then((res) => res.json()).
    then((data) => data);

    const {
        weather,
        main: {feels_like, humidity, pressure, temp, temp_max, temp_min},
        wind: {speed},
        sys: {country},
        name,
    } = data
    
    const {description, icon} = weather[0];

    return {
        description,
        iconURL : makeIconURL(icon),
        feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
        speed,
        country,
        name
    }
}

export default getWeatherData;