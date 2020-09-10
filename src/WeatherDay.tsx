import React from 'react'
import styled from 'styled-components'
import {getForecast} from './Weather'

const weatherOrder: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', '-']

export type PropsWeatherDay = {
	day: number,
	datetime: string,
	weather: string,
	icon: string
}

const getIconURL = (icon: string) :string => {
	return 'https://www.weatherbit.io/static/img/icons/' + icon + '.png'
}

export const WeatherDay:React.FC<PropsWeatherDay> = (props:PropsWeatherDay) => {
	// console.log('props: ', props);
	return (
		<div>
			<Container>
				<Box>{weatherOrder[props.day]}</Box>
				<Box>{props.datetime}</Box>
				<Box>{getForecast(props.weather)}</Box>
				<Box><IconImage src={getIconURL(props.icon)} alt={getForecast(props.weather)} /></Box>
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
`
const IconImage = styled.img`
	width: 80px;
	margin: 0 auto;
`

// const Day = styled.div`
// 	border:solid 1px black;
// `
// const Datetime = styled.div`
// 	border:solid 1px black;
// `
// const Weather = styled.div`
// 	border:solid 1px black;
// `
