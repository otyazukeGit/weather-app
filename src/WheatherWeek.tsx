import React from 'react'
import styled from 'styled-components'

//Grid linesで書ける？
const Container = styled.div`
	display: flex;
	width: 80vw;
	margin: 0 auto;
`
const Wheather = styled.p`
	border: solid 1px black;
	flex: 1;
	height: 80px;
`
const Box = styled.span`
	line-height:80px;
`

export const WheatherWeek = () => {
	return (
		<Container>	
			<Wheather className="monday"><Box>晴れ</Box></Wheather>
			<Wheather className="tuesday"><Box><Box>雨</Box></Box></Wheather>
			<Wheather className="wednesday"><Box>曇り</Box></Wheather>
			<Wheather className="thursday"><Box>晴れ</Box></Wheather>
			<Wheather className="friday"><Box>雨</Box></Wheather>
			<Wheather className="sataday"><Box><Box>曇り</Box></Box></Wheather>
			<Wheather className="sunday"><Box><Box>晴れ</Box></Box></Wheather>
		</Container>
	)
}
