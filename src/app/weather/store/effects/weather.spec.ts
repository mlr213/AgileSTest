import { WeatherEffects } from "./weather";
import { Observable, of, empty } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from '../../weather.service';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { SearchWeather, SearchWeatherSuccess, SearchWeatherFailure } from '../actions/weather';
import { mockedWeatherData } from 'src/app/mockdata/mockweatherdata';


describe('WeatherEffects', () => {
    let effects: WeatherEffects;
    let actions$;
    let weatherService= jasmine.createSpyObj('WeatherService', ['searchWeatherByCity']);
    
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          WeatherEffects,
          
          provideMockActions(() => actions$),
          { provide: WeatherService,useValue:weatherService },
          { provide: Actions, useFactory: actionFactory }
        ]
      });
  
      effects = TestBed.get(WeatherEffects);    
      actions$ = TestBed.get(Actions);
      weatherService=TestBed.get(WeatherService);    
 
    });
   
   describe('SearchWeatherSuccess', () => {
    it('should dispatch SearchWeatherSuccess action on successful call', () => {
       const action=new SearchWeather({city:'London'});
       const outcome =new SearchWeatherSuccess(mockedWeatherData);       
       weatherService.searchWeatherByCity.and.returnValue(of(mockedWeatherData))
       actions$.stream = hot('-a', { a: action });
       const expected = cold('-b', { b: outcome });
      
       expect(effects.searchWeather$).toBeObservable(expected);
    })
  });
  });

  export class factoryActions extends Actions {
    constructor() {
      super(empty());
    }
  
    set stream(source: Observable<any>) {
      this.source = source;
    }
  }
  
  export function actionFactory() {
    return new factoryActions();
  }