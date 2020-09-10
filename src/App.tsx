import React from 'react';
import logo from './logo.svg';
import './App.css';
import {WeatherWeek} from './WeatherWeek'
import {reducer} from './reducer'
import {initialState} from './initialState'

function App() {

	const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          週間天気
        </p>
      </header>
		<main>
			<WeatherWeek 
				forecasts={state.forecasts}
				visibleWeek={state.visibleWeek}
				dispatch={dispatch}
			/>
		</main>
    </div>
  );
}

export default App;
