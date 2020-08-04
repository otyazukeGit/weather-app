import React, { useState } from 'react'
import styled from 'styled-components'
import superagent from 'superagent'
import {APIKeys} from './apiKeyInfo'
// import superagent-no-cache from 'superagent-no-cache'

const Container = styled.div`
	display: flex;
	width: 80vw;
	margin: 0 auto;
`
const Button = styled.button`
	border:solid 1px black;
	font: orange;
`
const Weather = styled.p`
	border: solid 1px black;
	flex: 1;
	height: 80px;
`
const Box = styled.span`
	line-height:80px;
`


export const WeatherWeek = () => {
	const [sunday, setSunday] = useState('0')
	const getWeatherInfo = async () => {
		console.log('getWeatherInfo');
		const result = await superagent
			.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily')
			.query({ "lang": "en", "lat": "35.681236", "lon": "139.767125"})
			// .use(nocache)  // Prevents caching of *only* this request. Need require('superagent-no-cache');
			.set('x-rapidapi-host', 'weatherbit-v1-mashape.p.rapidapi.com')
			.set('x-rapidapi-key', APIKeys.Weather)
			.set('useQueryString', "true")
			.end((err, res) => {
				if (res.error) console.log('res.error: ', res.error)
				console.log(res.body)
				const firstday = res.body.data[0]
				setSunday(firstday['weather'].code)
			})
	}
	
	return (
		<div>
			<Button onClick={getWeatherInfo}>天気情報</Button>
			<Container>
			<Weather className="monday"><Box>{sunday}</Box></Weather>
				<Weather className="tuesday"><Box><Box>雨</Box></Box></Weather>
				<Weather className="wednesday"><Box>曇り</Box></Weather>
				<Weather className="thursday"><Box>晴れ</Box></Weather>
				<Weather className="friday"><Box>雨</Box></Weather>
				<Weather className="sataday"><Box><Box>曇り</Box></Box></Weather>
				<Weather className="sunday"><Box><Box>晴れ</Box></Box></Weather>
			</Container>
		</div>
	)
}
