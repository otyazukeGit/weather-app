import React from 'react';
import styled from 'styled-components'
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

	const [state, dispatch] = React.useReducer(reducer, initialState)

	return (
	<div className="App">
      <header className="App-header">
			<Title>
				Weekly Weather on Tokyo Station
			</Title>
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

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	&::before,::after {
		content: '';
		width: 100px;
		height: 2px;
		background-color: #111;
	}
	&::before {
		margin-right: 10px;
	}
	&::after {
		margin-left: 10px;
	}
`

const Nav = styled.nav`
	display:flex;
	justify-content:center;
	margin-top: 10px;
	padding-bottom: 10px;
	& a {
		margin-right: 10px;
	}
`

export default App;
