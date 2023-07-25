
import React from "react";
import './../styles/App.css';

const App = () => {
const weatherData = { temperature: 25, conditions: "Sunny" };
const threshold = 20;
  return (
     <div className="App">
      <h2>Weather for Your Location</h2>
      <p>Temperature: <span style={{ color: weatherData.temperature > threshold ? 'red' : 'blue' }}>{weatherData.temperature}</span></p>
      <p>Conditions: {weatherData.conditions}</p>
    </div>
  )
}

export default App
