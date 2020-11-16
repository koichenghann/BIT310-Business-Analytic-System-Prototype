import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  salesData = [50, 80, 40, 70];
  salesPercentage = (this.salesData[3]-this.salesData[2])/this.salesData[2]*100;
  constructor() { }

  ngOnInit(): void {
  }

}
