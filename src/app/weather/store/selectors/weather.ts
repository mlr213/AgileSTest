import {  createSelector } from "@ngrx/store";
import { IWeatherState } from "../state/weather";
import { IAppState } from 'src/app/app.state';

// TO BE IMPLEMENTED IF NF-RX IS USED

const selectWeathers= (state: IAppState) => state.Weathers;

export const selectWeatherList = createSelector(
    selectWeathers,
  (state: IWeatherState) => state.weathersList
);

export const selectFailureMsg = createSelector(
    selectWeathers,
  (state: IWeatherState) => state.isFailure
);

export const selectIsLoading = createSelector(
  selectWeathers,
(state: IWeatherState) => state.isLoading
);
