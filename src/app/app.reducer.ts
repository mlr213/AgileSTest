import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { WeatherReducers } from './weather/store/reducers/weather';


export const appReducers: ActionReducerMap<IAppState,any> = {
    Weathers:WeatherReducers
};