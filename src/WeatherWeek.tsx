import React from 'react'
import styled from 'styled-components'
import superagent from 'superagent'
import {APIKeys} from './apiKeyInfo'
import {WeatherDay} from './WeatherDay'
import {forecastType} from './initialState'
import {setForecasts, setForecastsType} from './actions'

type Props = {
	forecasts:forecastType,
	visibleWeek:boolean,
	dispatch:React.Dispatch<setForecastsType>
}

/**
 * Date??YYYYMMDD????????
 * @param dist  ...?????????
 */
const getJustDate = (dist:number = 0):string => {
	const date = new Date() //now
	date.setDate(date.getDate() - dist) //calc target date
	const year = date.getFullYear().toString()
	const month = ("00" + (date.getMonth() + 1)).slice(-2)   // +1, Because January is 0
	const day = ("00" + (date.getDate())).slice(-2)
	return year + month + day
}

export const WeatherWeek:React.FC<Props> = (props) => {

	const getWeatherInfo = async () => {
		console.log('getWeatherInfo');

		// localStorage.setItem('forecastDate', getJustDate(0))
		localStorage.setItem('forecastDate', '20200931')    /////////

		const result = await superagent
			.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily')
			.query({ "lang": "en", "lat": "35.681236", "lon": "139.767125"})
			.set('x-rapidapi-host', 'weatherbit-v1-mashape.p.rapidapi.com')
			.set('x-rapidapi-key', APIKeys.Weather)
			.set('useQueryString', "true")
			.end((err, res) => {
				if (res.error) console.log('res.error: ', res.error)
				// console.log('res.body: ', res.body)
				const forecastWeek = []
				for (let i=0; i<7; i++){
					const forecastDay = res.body.data[i]
					const day = new Date(forecastDay['datetime'])
					const splits = forecastDay['datetime'].split('-')
					const datetime = splits[1] + '/' + splits[2]
					const forecast = {
						day:day.getDay(), 
						datetime:datetime, 
						weather:forecastDay['weather'].code,
						icon:forecastDay['weather'].icon,
					}
					forecastWeek.push(forecast)
					localStorage.setItem('forecastWeek'+[i], JSON.stringify(forecast))
				}

				console.log('forecastWeek: ', forecastWeek);
				props.dispatch(setForecasts(forecastWeek, true))
		})
	}

	console.log('visibleWeek: ', props.visibleWeek);
	
	const previousForcastLS = []
	const previousForcast = []
	const previousDate:string | null = localStorage.getItem('forecastDate')
	let showPrevious:boolean = false
	if(previousDate){
		for (let i=0; i<7; i++){
			previousForcastLS[i] = localStorage.getItem('forecastWeek' + [i])
			if(previousForcastLS[i] && previousForcastLS[i] != null){
				previousForcast.push(JSON.parse(previousForcastLS[i] || "{}"))
			}
		}
		showPrevious = Number(previousDate) <= Number(getJustDate(1)) ? true : false
	}else {
		showPrevious = false
	}

	return (
		<Area>
			<Button onClick={getWeatherInfo}>天気情報</Button>
			{props.visibleWeek ? <h3>Weekly Weather Forecast </h3> : ""}
			<Container data-testid='weatherDays' visibleWeek={props.visibleWeek}>
				{props.forecasts.map((forecast, index) => (
					<WeatherDay 
						key={index} 
						day={forecast.day} 
						datetime={forecast.datetime} 
						weather={forecast.weather} 
						icon={forecast.icon}
						  />
				))}
			</Container>
			<h3>Previous Result</h3>
			<div>(more than a day ago)</div>
			<Container visibleWeek={showPrevious}>
				{previousForcast.map((forecast, index) => (
					<WeatherDay 
						key={index} 
						day={forecast.day} 
						datetime={forecast.datetime} 
						weather={forecast.weather} 
						icon={forecast.icon}
						  />
				))}
			</Container>
		</Area>
	)
}

const Area = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Container = styled.div<{ visibleWeek: boolean}>`
	display: ${props => ( props.visibleWeek ? 'flex' : 'none!important' )};
	justify-content:center;
	width: 80vw;
	margin: 1em auto 0;
`
const Button = styled.button`
	/* margin-bottom: 0 auto 20px; */
	border:solid 1px black;
	/* width:40px; */
	font: orange;
`

