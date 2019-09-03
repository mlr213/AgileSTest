import { Component, OnChanges, Input } from '@angular/core';
import { Weather } from 'src/app/model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  @Input() weatherList : Weather[]
  constructor() { }
}


