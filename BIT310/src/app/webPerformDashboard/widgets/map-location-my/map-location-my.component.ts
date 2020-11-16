import { Component,  OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Malaysia from '@highcharts/map-collection/countries/my/my-all.geo.json';

@Component({
  selector:'app-widget-map-location',
  templateUrl: 'map-location-my.component.html',
  styleUrls: ['map-location-my.component.scss'],

})

export class MapLocationComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {};

  ngOnInit(){
    var mapdata = [
      ['my-sa', 0],
      ['my-sk', 1],
      ['my-la', 2],
      ['my-pg', 3],
      ['my-kh', 4],
      ['my-sl', 5],
      ['my-ph', 6],
      ['my-kl', 7],
      ['my-pj', 8],
      ['my-pl', 9],
      ['my-jh', 10],
      ['my-pk', 11],
      ['my-kn', 12],
      ['my-me', 13],
      ['my-ns', 14],
      ['my-te', 15]
  ];

    this.chartOptions =  {
      chart: {
          map: 'Malaysia'
      },

      title: {
          text: 'Highmaps basic demo'
      },

      subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/my/my-all.js">Malaysia</a>'
      },

      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },

      colorAxis: {
          min: 0
      },

      series: [{
          data: mapdata,
          name: 'Random data',
          states: {
              hover: {
                  color: '#BADA55'
              }
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }, {
          name: 'Separators',
          type: 'mapline',
          data: Highcharts.geojson(Highcharts.maps['countries/my/my-all'], 'mapline'),
          color: 'silver',
          nullColor: 'silver',
          showInLegend: false,
          enableMouseTracking: false
      }]
  }


}
