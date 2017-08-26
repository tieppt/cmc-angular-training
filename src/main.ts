import { enableProdMode, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/take';
// import { Computer, CPU } from './computer';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// const tk = 'server';
// const obj = {
//   run() {
//     console.log('obj run');
//   }
// };

// const injector = ReflectiveInjector
//   .resolveAndCreate([
//     {provide: Computer, useClass: Computer},
//     {provide: CPU, useClass: CPU},
//     {provide: tk, useExisting: Computer},
//     {provide: 'object', useValue: obj}
//   ]);
// const c = injector.get(tk);
// c.run();
// const i = injector.get(Computer);
// console.log(c === i);
//
// const o = injector.get('object');
// o.run();

// const observable = Observable.interval(1000);
//
// const subscription = observable.take(2)
//   .subscribe(item => console.log(item));
//
// const obArr = Observable.from([12, 3, 5]);
// obArr.subscribe(x => console.log(x));
