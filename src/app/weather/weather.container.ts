import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Weather } from "../model/weather";
import { Store, select } from "@ngrx/store";
import {
  selectWeatherList,
  selectFailureMsg,
  selectIsLoading
} from "./store/selectors/weather";
import { SearchWeather } from "./store/actions/weather";

import { IAppState } from "../app.state";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.container.html"
})
export class WeatherContainer implements OnInit {
  weatherList$: Observable<Weather[]>;
  isLoading$: Observable<boolean>;
  isFailure$: Observable<boolean>;
  constructor(private _store: Store<IAppState>) {}
  ngOnInit(): void {
    this.weatherList$ = this._store.pipe(select(selectWeatherList));
    this.isLoading$ = this._store.pipe(select(selectIsLoading));
    this.isFailure$ = this._store.pipe(select(selectFailureMsg));
  }

  citySearch(city) {
    this._store.dispatch(new SearchWeather({ city }));
  }
}
