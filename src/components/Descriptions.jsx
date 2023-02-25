import React from 'react'
import "./Descriptions.css"
import { FaArrowUp, FaArrowDown, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'

const Descriptions = ({weatherData, tempUnit}) => {

    const temp = tempUnit === "metric" ? "°C" : "°F";
    const windUnit = tempUnit === "metric" ? "m/s" : "miles/h";

    const cards = [
        {
        id: 1,
        icon: <FaArrowDown />,
        title: "Min",
        data: weatherData.temp_min.toFixed(),
        unit: temp,
        },
        {
        id: 2,
        icon: <FaArrowUp />,
        title: "Max",
        data: weatherData.temp_max.toFixed(),
        unit: temp,
        },
        {
        id: 3,
        icon: <BiHappy />,
        title: "Feels like",
        data: weatherData.feels_like,
        unit: temp,
        },
        {
        id: 4,
        icon: <MdCompress />,
        title: "Pressure",
        data: weatherData.pressure,
        unit: "hPa",
        },
        {
        id: 5,
        icon: <MdOutlineWaterDrop />,
        title: "Humidity",
        data: weatherData.humidity,
        unit: "%",
        },
        {
        id: 6,
        icon: <FaWind />,
        title: "Wind speed",
        data: weatherData.speed,
        unit: windUnit,
        },
    ];
  
  return (
    <div className="section section_description">
        {cards.map(({id, icon, title, data, unit}) => (
            <div key={id} className="card">
                <div className="description_card-icon">
                    {icon}
                    <small>{title}</small>
                </div>
                <h2>{data} {unit}</h2>
            </div>
        ))}
    </div>
  )
}

export default Descriptions