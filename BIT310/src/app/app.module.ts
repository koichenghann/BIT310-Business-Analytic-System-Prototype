import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { DefaultModule } from './test-area/default/default.module';
// import { SideNavService }

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SalesChartComponent } from './dashboard/sales-chart/sales-chart.component';
import { ProductSalesDistributionTableComponent } from './dashboard/product-sales-distribution-table/product-sales-distribution-table.component';
import { CustomDataListComponent } from './dashboard/custom-data-list/custom-data-list.component';
import { MonthlySalesReportComponent } from './monthly-sales/monthly-sales-report/monthly-sales-report.component';
import { ProductCategorySalesReportComponent } from './product-category-sales/product-category-sales-report/product-category-sales-report.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataEntryManagementComponent } from './data-entry-management/data-entry-management/data-entry-management.component';
import { DetailedReportComponent } from './detailed-report/detailed-report/detailed-report.component';
import { ForecastReportComponent } from './forecast-report/forecast-report/forecast-report.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { SideNavCtsComponent } from './shared/side-nav-cts/side-nav-cts.component'
import { BaseCardTemplateComponent } from './base-card-template/base-card-template.component';
import { HeaderComponent } from './shared/header/header.component';



//angular material
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';


import { SideNavService } from './shared/side-nav/side-nav.service';
// import { AreaComponent } from './test-area/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SalesReportComponent } from './charts/sales-report/sales-report.component';
import { ProductSalesDistributionReportComponent } from './charts/product-sales-distribution-report/product-sales-distribution-report.component';
import { CardAreaChartComponent } from './charts/card-area-chart/card-area-chart.component';
import { MonthlySalesReportChartComponent } from './charts/monthly-sales-report-chart/monthly-sales-report-chart.component';
// import { PieComponent } from './test-area/widgets/pie/pie.component';
// import { CardComponent } from './test-area/widgets/card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SalesChartComponent,
    ProductSalesDistributionTableComponent,
    CustomDataListComponent,
    MonthlySalesReportComponent,
    ProductCategorySalesReportComponent,
    DashboardComponent,
    DataEntryManagementComponent,
    DetailedReportComponent,
    ForecastReportComponent,
    SideNavComponent,
    BaseCardTemplateComponent,
    HeaderComponent,
    SalesReportComponent,
    ProductSalesDistributionReportComponent,
    SideNavCtsComponent,
    CardAreaChartComponent,
    MonthlySalesReportChartComponent,

    // PieComponent
    // CardComponent
    // AreaComponent
  ],
  imports: [
    DefaultModule,
    routing,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDividerModule,


    HighchartsChartModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
