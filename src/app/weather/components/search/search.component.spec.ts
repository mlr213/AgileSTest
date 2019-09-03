import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

import Spy = jasmine.Spy;
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should emit a value on search method call ', function() {
    const searchBtnEmitSpy = spyOn(component.citySearchEvent, 'emit').and.callFake(() => {''});
    component.search();
    fixture.detectChanges();
    expect(searchBtnEmitSpy).toHaveBeenCalled();
  });

  it('should reset the form on search method call', function() {
    const resetFormSpy= spyOn(component.searchForm, 'reset').and.callFake(() => {'London'});
    component.search();
    fixture.detectChanges();
    expect(resetFormSpy).toHaveBeenCalledWith();
  });
});
