import { Weather } from 'src/app/model/weather';


export interface IWeatherState {
    weathersList: Weather[];
    isLoading: boolean,
    isFailure: boolean
  }
  
  export const initialWeatherState: IWeatherState = {
    weathersList: [],
    isLoading: false,
    isFailure: false
  };
  