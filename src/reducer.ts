import {initialState, initialStateType} from './initialState'
import {setForecastsType, setShowPreviousType} from './actions'

type actionType = setForecastsType | setShowPreviousType  // | .. | ..

export const reducer = (state:initialStateType = initialState, action:actionType) => {
	switch(action.type){
		case 'setForecasts':
			return Object.assign({}, state, {...state, forecasts:action.forecasts, visibleWeek:action.visibleWeek})
		case 'setShowPrevious':
			return Object.assign({}, state, {...state, showPrevious:action.showPrevious, previousForcast:action.previousForcast})
		default:
			return state
	}
}
