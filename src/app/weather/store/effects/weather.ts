import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EWeatherActions, SearchWeather, SearchWeatherSuccess, SearchWeatherFailure } from '../actions/weather';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../../model/weather';

import { IWeatherState } from '../state/weather';
import {  of, Observable } from 'rxjs';
// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX


@Injectable()
export class WeatherEffects{
    @Effect()
    searchWeather$:Observable<SearchWeatherSuccess | SearchWeatherFailure>=this._actions.pipe(
        ofType<SearchWeather>(EWeatherActions.SearchWeather),
        mergeMap(({payload}) => 
            this._weatherService.searchWeatherByCity(payload.city)
            .pipe(
              map((weather: Weather) => new SearchWeatherSuccess(weather)),
              catchError(err => of(new SearchWeatherFailure(err)))
            )
          )       
        )

    constructor(private _weatherService :WeatherService,private _actions:Actions){}
}