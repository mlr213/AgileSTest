import { EWeatherActions, WeatherActions } from "../actions/weather";
import { initialWeatherState, IWeatherState } from "../state/weather";

export function WeatherReducers(
  state = initialWeatherState,
  action: WeatherActions
): IWeatherState {
  switch (action.type) {
    case EWeatherActions.SearchWeather:
      return {
        ...state,
        isFailure: false,
        isLoading: true
      };
    case EWeatherActions.SearchWeatherSuccess:
      return {
        ...state,
        isFailure: false,
        isLoading: false,
        weathersList: [...state.weathersList, action.payload]
      };
    case EWeatherActions.SearchWeatherFailure:
      return { ...state, isLoading: false, isFailure:true};
    default:
      return state;
  }
}
