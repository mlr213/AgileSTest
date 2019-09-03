import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [ 
    CommonModule,   
     ReactiveFormsModule
  ],
  declarations: [LoaderComponent,ErrorComponent],
  exports: [LoaderComponent,ErrorComponent]
})
export class SharedModule { }