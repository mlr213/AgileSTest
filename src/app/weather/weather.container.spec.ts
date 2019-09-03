import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WeatherContainer } from "./weather.container";
import { SearchWeather, IWeatherState } from "./store";
import { Store, select, StoreModule, combineReducers } from "@ngrx/store";
import {  of } from "rxjs";
import { selectWeatherList } from './store/selectors/weather';
import { IAppState } from '../app.state';
import { appReducers } from '../app.reducer';


describe("WeatherContainer", () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store<IWeatherState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [      
  StoreModule.forRoot({
          feature: combineReducers(appReducers),
        })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to get weather by city', async() => {
    const cityName = 'London';
    component.citySearch(cityName);
    const action = new SearchWeather({city:cityName});
    await expect(store.dispatch).toHaveBeenCalledWith(action);
  });
  afterEach(() => {
    fixture.destroy();
  });
});

export const mockWeatherData = [
  { city: 'Florida', temp: 30.2 },
  { city: 'Paris', temp: 20.4 },
  { city: 'Ruislip', temp: 17.5 }
];