import React from 'react';
import logo from './logo.svg';
import './App.css';
import {WeatherWeek} from './WeatherWeek'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          週間天気
        </p>
      </header>
		<main>
			<WeatherWeek/>
		</main>
    </div>
  );
}

export default App;
