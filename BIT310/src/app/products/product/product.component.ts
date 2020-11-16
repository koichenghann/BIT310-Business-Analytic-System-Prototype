import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  oriStock = 100;
  //number must be scale down to 0 - 100
  revenueData = [50, 80, 40, 70];
  revenuePercentage = (this.revenueData[3]-this.revenueData[2])/this.revenueData[2]*100;

  itemSoldData = [50, 80, 40, 70];
  itemSoldPercentage = (this.itemSoldData[3]-this.itemSoldData[2])/this.itemSoldData[2]*100;

  viewData = [80, 40, 70, 50];
  viewPercentage = (this.viewData[3]-this.viewData[2])/this.viewData[2]*100;

  inStockData = [100, 90, 80, 70];
  inStockPercentage = this.oriStock / 100 * this.inStockData[3];

  constructor() { }

  ngOnInit(): void {
  }

}
