import { Component, OnInit, Input } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('datos') doughnutChartData: SingleDataSet;
  // tslint:disable-next-line: no-input-rename
  @Input('etiquetas') doughnutChartLabels: Label[];
  @Input() leyenda: any;
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}
}
