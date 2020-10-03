import {forecastType, visibleWeekType, showPreviousType} from './initialState'

export type setForecastsType = {type: 'setForecasts', forecasts:forecastType, visibleWeek:visibleWeekType}
export type setShowPreviousType = {type: 'setShowPrevious', showPrevious:showPreviousType, previousForcast:forecastType}

export const setForecasts = (forecasts:forecastType, visibleWeek:visibleWeekType):setForecastsType => {
	return {type: 'setForecasts', forecasts:forecasts, visibleWeek:visibleWeek}
}
export const setShowPrevious = (showPrevious:showPreviousType, previousForcast:forecastType):setShowPreviousType => {
	return {type: 'setShowPrevious', showPrevious:showPrevious, previousForcast:previousForcast}
}
