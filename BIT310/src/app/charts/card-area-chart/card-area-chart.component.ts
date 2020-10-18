import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card-area-chart',
  templateUrl: './card-area-chart.component.html',
  styleUrls: ['./card-area-chart.component.scss']
})
export class CardAreaChartComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() hidechart: boolean;

  chartOptions: {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
        chart: {
            type: 'area',
            backgroundColor: null,
            borderWidth: 0,
            margin: [2, 2, 2, 2],
            height: 50
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        tooltip: {
            split: true,
            outside: true
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        } ,
        exporting: {
          enabled: false
        },
        xAxis: {
          labels: {
            enabled: false,

          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        yAxis: {
          labels: {
            enabled: false,

          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        series: [{
          data: [71, 78, 39, 66]
        }]
    };

    HC_exporting(Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300);

  }

}
