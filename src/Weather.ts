type forecastType = '嵐' | '霧雨' | '雨' | '雪' | 'ガス' | '晴れ' | '曇り' | '豪雨' | 'ー'

export const getForecast = (weatherCode:string):forecastType => {
	const code = Number(weatherCode)
	if (200 <= code && code <= 233){
		return '嵐'
	} else if (300 <= code && code <= 302){
		return '霧雨'
	} else if (500 <= code && code <= 502){
		return '雨'
	} else if (600 <= code && code <= 623){
		return '雪'
	} else if (700 <= code && code <= 751){
		return 'ガス'
	} else if (800 === code){
		return '晴れ'
	} else if (800 <= code && code <= 804){
		return '曇り'
	} else if (900 === code) {
		return '豪雨'
	} else {
		return 'ー'
	}

}
