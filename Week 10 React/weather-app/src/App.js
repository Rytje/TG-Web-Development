import { useState } from 'react'
import './App.css';
import WeatherCard from './WeatherCard';
import WeatherDetail from './WeatherDetail';

function App() {

  const [onDetailState, setOnDetailState] = useState({
    state: false,
    clickedCity: "",
    longitude: "",
    latitude: ""
  });

  if (!onDetailState.state) {
    return (
      <div className="app">
        <WeatherCard city="Amsterdam" onDetailState={onDetailState} setOnDetailState={setOnDetailState} />
        {/* <WeatherCard city="London" /> */}
        {/* <WeatherCard city="Kaapstad" onDetailState={onDetailState} setOnDetailState={setOnDetailState} /> */}
        {/* <WeatherCard city="Tokyo" onDetailState={onDetailState} setOnDetailState={setOnDetailState} /> */}
        {/* <WeatherCard city="Den Haag" /> */}
        {/* <WeatherDetail /> */}
      </div>
    );
  } else {
    return(
      <WeatherDetail city={onDetailState.clickedCity} setOnDetailState={setOnDetailState} longitude={onDetailState.longitude} latitude={onDetailState.latitude} />
    );
  }

}

export default App;
