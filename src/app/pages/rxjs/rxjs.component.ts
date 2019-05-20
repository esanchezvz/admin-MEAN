import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subcription: Subscription;

  constructor() {
    this.subcription = this.regresaObs()
      .pipe(
        map(res => {
          return res.valor;
        }),
        filter((valor, index) => {
          if (valor % 2 === 1) {
            return true;
          } else {
            return false;
          }
        })
      )
      .subscribe(
        num => console.log(num),
        err => console.error(err),
        () => console.log('Terminó el Observable')
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  regresaObs(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;

        const salida = {
          valor: count
        };

        observer.next(salida);

        // if (count === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
      }, 1000);
    });
  }
}
