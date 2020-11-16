import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit {
  customColor = 'blue';

//#03bf00
  @ViewChild('percentage') percent;
  @ViewChild('icon') icon;

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() hidechart: boolean;
  @Input() colorTheme: string;
  @Input() data: number[];


  chartOptions: {};
  Highcharts = Highcharts;
  // Highcharts.seriesTypes.line.prototype.getPointSpline = Highcharts.seriesTypes.spline.prototype.getPointSpline;



  constructor() { }

  ngAfterViewInit() {
  this.customColor = this.colorTheme;
  }

  ngOnInit(): void {

    this.chartOptions = {
        chart: {
            type: 'spline',
            backgroundColor: null,
            borderWidth: 0,
            margin: [2, 2, 2, 2],
            height: 50,
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        tooltip: {
            split: false,
            outside: false
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
          tickOptions: [],
          visible: false

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
          tickOptions: [],
          tickWidth: 0,
          crosshair: false,
          lineWidth: 0,
          gridLineWidth:0,
          visible: false
        },
        plotOptions: {
          spline: {
              marker: {
                  enabled: false,
                  radius: 4,
                  lineColor: this.colorTheme,
                  lineWidth: 1
                },
                lineColor: this.colorTheme
              }
        },

        series: [{
          data: this.data
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
