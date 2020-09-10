import {forecastType, visibleWeekType} from './initialState'

export type setForecastsType = {type: 'setForecasts', forecasts:forecastType, visibleWeek:visibleWeekType}

export const setForecasts = (forecasts:forecastType, visibleWeek:visibleWeekType):setForecastsType => {
	return {type: 'setForecasts', forecasts:forecasts, visibleWeek:visibleWeek}
}
