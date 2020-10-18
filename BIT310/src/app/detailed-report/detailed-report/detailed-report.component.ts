import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  product: string;
  salesDistribution: string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {product: 'C001', salesDistribution: 'Marry'},
  {product: 'C002', salesDistribution: 'Chris'},
  {product: 'C003', salesDistribution: 'Kylie'},
  {product: 'C004', salesDistribution: 'Brian'},
  {product: 'C005', salesDistribution: 'Brandon'},
  {product: 'C006', salesDistribution: 'Jason'},
  {product: 'C007', salesDistribution: 'Nick'},
  {product: 'C008', salesDistribution: 'Alexander'},
  {product: 'C009', salesDistribution: 'Figo'},
  {product: 'C010', salesDistribution: 'Ronaldo'},
];
@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.component.html',
  styleUrls: ['./detailed-report.component.scss']
})
export class DetailedReportComponent implements OnInit {
  displayedColumnsInfo: string[] = ['product', 'salesDistribution'];
  dataSourceInfo = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
