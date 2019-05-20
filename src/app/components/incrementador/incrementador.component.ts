import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('input') input: ElementRef;

  @Input() porcentaje: number = 50;
  @Input() titulo: string = 'Título';

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChange(value: number) {
    if (value >= 100) {
      this.porcentaje = 100;
    } else if (value <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = value;
    }
    this.input.nativeElement.value = this.porcentaje;
    this.valueChange.emit(this.porcentaje);
  }

  cambiarValor(valor: number): void {
    if (this.porcentaje === 100 && valor > 0) {
      return;
    }

    if (this.porcentaje === 0 && valor < 0) {
      return;
    }

    this.porcentaje += valor;
    this.valueChange.emit(this.porcentaje);
    this.input.nativeElement.focus();
  }
}
