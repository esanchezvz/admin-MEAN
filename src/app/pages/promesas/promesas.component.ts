import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres().then(res => {
      console.log(res);
    });
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let count = 0;
      const intervalo = setInterval(() => {
        count += 1;
        console.log(count);

        if (count === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

  async resolve(prom) {
    const algo = await prom;
    return algo;
  }
}
