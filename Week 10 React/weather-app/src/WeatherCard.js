import React, { useState, useEffect } from 'react'
import './WeatherCard.css'
import {apiKey} from './secret-file';

export default function WeatherCard(props) {

    const [temperature, setTemperature] = useState("");
    const [minTemp, setMinTemp] = useState("");
    const [maxTemp, setMaxTemp] = useState("");
    const [humidity, setHumidity] = useState("");

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    function doLog(){
        console.log("This is a test log");
    }

    function getWeatherClick() {
        console.log("get weather");
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            // .then(data => apiData = data)
            // .then(()=> console.log(apiData))
            .then(data =>{
                setTemperature(data.main.temp);
                setMinTemp(data.main.temp_min);
                setMaxTemp(data.main.temp_max);
                setHumidity(data.main.humidity);
            });
            // .then(data => setTemperature(data.main.temp))
            // .then(data => setMinTemp(data.main.temp_min))
            // .then(data => setMaxTemp(data.main.temp_max))
            // .then(data => setHumidity(data.main.humidity));
    }

    return (
        <div className="card">
            <h2>{props.city}</h2>
            <h3>{temperature + "°C"}</h3>
            <div>
                <span>min. temp</span>
                <span>{minTemp}</span>

                <span>max. temp</span>
                <span>{maxTemp}</span>

                <span>humidity</span>
                <span>{humidity}</span>
            </div>
            <button onClick={getWeatherClick}>Get weather</button>
        </div>
    )
}
