import { Action } from '@ngrx/store';
import {  Weather } from 'src/app/model/weather';

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

export enum EWeatherActions{
    SearchWeather='[Weather] Search Weather',
    SearchWeatherSuccess='[Weather] Search Weather Success',
    SearchWeatherFailure='[Weather] Search Weather Failure' 
}

export class SearchWeather implements Action{
   public readonly type= EWeatherActions.SearchWeather;
   constructor(public payload:{city : string}){
   }
}

 export class SearchWeatherSuccess implements Action{
    public readonly type= EWeatherActions.SearchWeatherSuccess;
    constructor(public payload:Weather){
       console.log(payload);
    }
 }

 export class SearchWeatherFailure implements Action{
    public readonly type= EWeatherActions.SearchWeatherFailure;
    constructor(public payload:string){
     
    }
 }


 export type WeatherActions = SearchWeather | SearchWeatherSuccess | SearchWeatherFailure;
