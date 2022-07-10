import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';



@NgModule({
  declarations: [
    LazyLoadedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyLoadedModule {
  constructor() {
    console.log('Manual Lazy Load of module Successful!!');
  }
}
