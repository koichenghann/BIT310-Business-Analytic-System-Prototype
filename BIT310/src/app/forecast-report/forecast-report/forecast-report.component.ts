import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-report',
  templateUrl: './forecast-report.component.html',
  styleUrls: ['./forecast-report.component.scss']
})
export class ForecastReportComponent implements OnInit {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  years = [
    '2019',
    '2020'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
