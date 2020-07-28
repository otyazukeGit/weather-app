import React from 'react';
import logo from './logo.svg';
import './App.css';
import {WheatherWeek} from './WheatherWeek'

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
			<WheatherWeek/>
		</main>
    </div>
  );
}

export default App;
