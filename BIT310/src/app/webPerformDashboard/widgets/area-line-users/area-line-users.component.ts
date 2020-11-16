import { Component,  OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector:'app-widget-area-line-users',
  templateUrl: 'area-line-users.component.html',
  styleUrls: ['area-line-users.component.scss'],

})

export class AreaLineUsersComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() {};

  ngOnInit(){
    this.chartOptions = {
      chart: {
          type: 'line'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: false
              },
              enableMouseTracking: true
          },

          series: {
            color: 'green'
        }
      },
      series: [{
          name: "New Sign-Up",
          data: [4500, 3750, 5670, 6350, 7200, 6880]
      }]
  }
}}
