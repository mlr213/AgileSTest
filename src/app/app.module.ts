import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModule } from './weather/weather.module';
import { WeatherService } from './weather/weather.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './app.reducer';
import { WeatherEffects } from './weather/store';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    WeatherModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([WeatherEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
