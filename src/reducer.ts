import {initialState, initialStateType} from './initialState'
import {setForecastsType} from './actions'

type actionType = setForecastsType  // | .. | ..

export const reducer = (state:initialStateType = initialState, action:actionType) => {
	switch(action.type){
		case 'setForecasts':
			return Object.assign({}, state, {forecasts:action.forecasts, visibleWeek:action.visibleWeek})
		default:
			return state
	}
}
