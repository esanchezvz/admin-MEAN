import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje1: number = 50;
  porcentaje2: number = 60;

  constructor() {}

  ngOnInit() {}

  actualizarValor(event: number) {
    console.log('evento -> ', event);
  }
}
