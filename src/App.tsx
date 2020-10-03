import React from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';
import {About} from './About'
import {WeatherWeek} from './WeatherWeek'
import {reducer} from './reducer'
import {initialState} from './initialState'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
 } from "react-router-dom"

function App() {
	// console.log('App()');

	const Nav = styled.nav`
		display:flex;
		justify-content:center;
		margin-bottom: 10px;
		& a {
			margin-right: 10px;
		}
	`

	const [state, dispatch] = React.useReducer(reducer, initialState)

	return (
	<div className="App">
      <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p id="title">
				週間天気
			</p>
      </header>
		<main>
			<Router>
				<Nav>
					<Link to="/">Weather</Link>
					<Link to="/about">About</Link>
				</Nav>

				<Switch>
					<Route path="/" exact>
						<WeatherWeek 
							forecasts={state.forecasts}
							visibleWeek={state.visibleWeek}
							showPrevious={state.showPrevious}
							previousForcast={state.previousForcast}
							dispatch={dispatch}
						/>
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
				</Switch>
			</Router>
		</main>
    </div>
  );
}

export default App;
