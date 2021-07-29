import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  return (
    <div className="app">
      <WeatherCard city="Amsterdam" />
      <WeatherCard city="London" />
      {/* <WeatherCard city="Rotterdam" /> */}
      {/* <WeatherCard city="Leiden" /> */}
      {/* <WeatherCard city="Den Haag" /> */}
    </div>
  );
}

export default App;
