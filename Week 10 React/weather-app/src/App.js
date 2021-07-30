import './App.css';
import WeatherCard from './WeatherCard';
import WeatherDetail from './WeatherDetail';

function App() {
  return (
    <div className="app">
      {/* <WeatherCard city="Amsterdam" />
      <WeatherCard city="London" />
      <WeatherCard city="Kaapstad" />
      <WeatherCard city="Tokyo" /> */}
      {/* <WeatherCard city="Den Haag" /> */}
      <WeatherDetail />
    </div>
  );
}

export default App;
