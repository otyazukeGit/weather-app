import React from 'react'

export const About = () => {
	return (
		<div>
			<h2>About Weather App</h2>
			<div>本日より一週間の天気予報情報を取得/表示する</div>
			<details>
				<summary>使用API</summary>
				<h3>Rakuten Rapid API - Weather</h3>
				<div>現在の天気データAPI、および天気予報API - Weatherbit.io Weather APIへの基本的なアクセス。</div>
				<a href="https://api.rakuten.net/weatherbit/api/weather" target="_blank" rel="noopener noreferrer">https://api.rakuten.net/weatherbit/api/weather</a>
			</details>
		</div>
	)
}
