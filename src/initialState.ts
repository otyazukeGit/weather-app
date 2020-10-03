export type forecastType = {day:number, datetime:string, weather:string, icon:string}[]
export type visibleWeekType = boolean
export type showPreviousType = boolean

export type initialStateType = {
	forecasts:forecastType,
	visibleWeek:visibleWeekType,
	showPrevious:showPreviousType,
	previousForcast:forecastType

}

export const initialState:initialStateType = {
	forecasts: [
		{day:7, datetime:'-', weather:'-', icon: '-'},
		{day:7, datetime:'-', weather:'-', icon: '-'},
		{day:7, datetime:'-', weather:'-', icon: '-'},
		{day:7, datetime:'-', weather:'-', icon: '-'},
		{day:7, datetime:'-', weather:'-', icon: '-'},
		{day:7, datetime:'-', weather:'-', icon: '-'},
		{day:7, datetime:'-', weather:'-', icon: '-'},
	],
	visibleWeek: false,
	showPrevious: false,
	previousForcast: []
}
