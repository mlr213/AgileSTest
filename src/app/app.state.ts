import { IWeatherState, initialWeatherState } from './weather/store';


export interface IAppState {
  Weathers:IWeatherState
}

export const initialAppState:IAppState={
    Weathers:initialWeatherState
}

export function getInitialState():IAppState{
    return initialAppState
}