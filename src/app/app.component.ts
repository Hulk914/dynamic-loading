import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('viewContainer', { read: ViewContainerRef, static: true }) containerRef!: ViewContainerRef;
  constructor(private appService: AppService) { }

  loadModule() {
    this.appService.instantiateModule(import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule), this.containerRef);
  }

}
