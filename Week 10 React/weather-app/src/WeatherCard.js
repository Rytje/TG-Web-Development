import React, { useState, useEffect } from 'react'
import './WeatherCard.css'
import {apiKey} from './secret-file';

export default function WeatherCard(props) {

    const [temperature, setTemperature] = useState('no data');
    const [minTemp, setMinTemp] = useState('no data');
    const [maxTemp, setMaxTemp] = useState('no data');
    const [humidity, setHumidity] = useState('no data');
    const [icon, setIcon] = useState("10d");
    const [dataRefresh, setDataRefresh] = useState(0)

    useEffect(() => {
        console.log("Do API call for data");
        // setTemperature(Math.floor((Math.random()*30)+1));
        // getWeatherClick();
        console.log("Temperature state has been set");
    }, [dataRefresh]);

    function doDataUpdate(){
        setDataRefresh(dataRefresh + 1);
    }

    function getWeatherClick() {
        console.log("get weather");
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data =>{
                setTemperature(data.main.temp);
                setMinTemp(data.main.temp_min);
                setMaxTemp(data.main.temp_max);
                setHumidity(data.main.humidity);
                setIcon(data.weather[0].icon);
            });
    }

    function openDetails(){
        console.log("Open details");
    }

    if(!temperature) return null;

    return (
        <div className="card" onClick={openDetails}>
            <h2>{props.city}</h2>
            <img src={"http://openweathermap.org/img/wn/" + icon +"@2x.png"}></img>
            <h3>{Math.trunc(temperature) + "°C"}</h3>
            <div>
                <span>min. temp</span>
                <span>{Math.trunc(minTemp) + "°C"}</span>

                <span>max. temp</span>
                <span>{Math.trunc(maxTemp) + "°C"}</span>

                <span>humidity</span>
                <span>{Math.trunc(humidity) + "%"}</span>
            </div>
            <button onClick={doDataUpdate}>Get weather</button>
        </div>
    )
}
