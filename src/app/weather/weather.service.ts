import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Weather } from "../model/weather";
import { catchError } from "rxjs/operators";

@Injectable()
export class WeatherService {
  
  constructor(private http: HttpClient) {}

  searchWeatherByCity(city: string): Observable<Weather> {
   
    let params = new HttpParams()
      .set("q", city)
      .set("cnt", "8")
      .set("units", "metric")
      .set("APPID", environment.APPID);
    return this.http
      .get<any>(environment.apiUrl, { params })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
