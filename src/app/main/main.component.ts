import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
 
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Borowik szlachetny', 'Koźlarz babka', 'Podgrzybek złotopory', 'Mleczaj smaczny', 'Pieczarka bulwiasta', 'Maślak żółty', 'Piaskowiec modrzak', 'Bocznik ostrygowaty'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [6, 6, 3, 5, 6, 4, 3.5, 5], label: 'Min' },
    { data: [25, 25, 10, 15, 14, 15, 12, 25], label: 'Max' }
  ];


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
