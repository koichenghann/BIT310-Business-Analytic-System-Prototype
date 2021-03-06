import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-sales-orders',
  templateUrl: './sales-orders.component.html',
  styleUrls: ['./sales-orders.component.scss']
})
export class SalesOrdersComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
        chart: {
            type: 'areaspline',
            marginTop: 50

        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        // tooltip: {
        //     split: true,
        //     valueSuffix: ' MYR'
        // },

        legend: {
          enabled: true,
          align: 'top',
          verticalAlign: 'top',
          y: -16
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            format: '{value}'
          }
        },
        xAxis: {
          // reversed: false,
          gridLineWidth: 1,
          title: {
            text: null
          },
          labels: {
            format: "Nov {value}"
          }
        },
        plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 12,
              marker: {
                enabled: false,
                // fillColor: '#1441c9',
                // lineWidth: 2,
                // lineColor: '#1441c9'
            }
          },
          areaspline: {
           fillOpacity: 0.1
          }
        },

        series: [{
          name: 'Revenue',
          tooltip: {
            valueSuffix: ' MYR',
          },
          data: [50, 150, 90, 190, 160, 220, 110]
        },
        {
          name: 'Order',
          tooltip: {
            valueSuffix: ' Orders',
          },
          data: [5, 15, 9, 19, 16, 22, 11]
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
