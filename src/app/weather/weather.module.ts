import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,   
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
 
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
