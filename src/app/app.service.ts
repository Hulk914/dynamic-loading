import { Compiler, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded/lazy-loaded.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private compiler: Compiler, private injector: Injector) { }

  instantiateModule(modulePath: any, vcRef: ViewContainerRef) {
    (modulePath as Promise<Type<any>>)
      .then(moduleElement => this.compiler.compileModuleAsync(moduleElement))
      .then(moduleFactory => {
        const moduleRef = moduleFactory.create(this.injector);
        const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(LazyLoadedComponent);
        vcRef.clear();
        vcRef.createComponent(componentFactory);
      });
  }
}
