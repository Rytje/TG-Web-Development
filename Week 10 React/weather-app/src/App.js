import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  return (
    <div className="app">
      <WeatherCard city="Amsterdam" />
      <WeatherCard city="London" />
    </div>
  );
}

export default App;
