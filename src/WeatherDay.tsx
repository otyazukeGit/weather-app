import React from 'react'
import styled from 'styled-components'
import {getForecast} from './Weather'

const weatherOrder: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', '-']

export type PropsWeatherDay = {
	day: number,
	datetime: string,
	weather: string,
	highTemp: number,
	lowTemp: number,
	icon: string
}

const getIconURL = (icon: string) :string => {
	return icon === ''
	? ''
	: 'https://www.weatherbit.io/static/img/icons/' + icon + '.png'
}

export const WeatherDay:React.FC<PropsWeatherDay> = (props:PropsWeatherDay) => {
	// console.log('props: ', props);
	return (
		<div>
			<Container>
				<Box>{weatherOrder[props.day]}</Box>
				<Box>{props.datetime}</Box>
				<Box>{getForecast(props.weather)}</Box>
				<Box2>{"High: " + props.highTemp + "°C"}</Box2>
				<Box2>{"Low: " + props.lowTemp + "°C"}</Box2>
				<Box>
					<IconImage 
						src={getIconURL(props.icon)} 
						alt={getForecast(props.weather)}
						onLoad={(e: React.ChangeEvent<HTMLImageElement>) => e.target.style.display = 'block'}
						onError={(e: React.ChangeEvent<HTMLImageElement>) => e.target.style.display = 'none'}
					/>
				</Box>
			</Container>
		</div>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 80px;
	margin: 0 auto;
`
const Box = styled.div`
	border:solid 1px black;
	background-color: white;
`
const Box2 = styled.div`
	border:solid 1px black;
	background-color: white;
	height: 40px;
`
const IconImage = styled.img`
	width: 80px;
	margin: 0 auto;
`
