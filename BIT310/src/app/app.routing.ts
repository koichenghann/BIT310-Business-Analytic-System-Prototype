import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MonthlySalesReportComponent } from './monthly-sales/monthly-sales-report/monthly-sales-report.component';
import { ProductCategorySalesReportComponent } from './product-category-sales/product-category-sales-report/product-category-sales-report.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataEntryManagementComponent } from './data-entry-management/data-entry-management/data-entry-management.component';
import { DetailedReportComponent } from './detailed-report/detailed-report/detailed-report.component';
import { ForecastReportComponent } from './forecast-report/forecast-report/forecast-report.component';


const APP_ROUTES: Routes = [
  {path:'login', component: LoginComponent},
  {path:'singup', component: SignupComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'product-category-sales-report', component: ProductCategorySalesReportComponent},
  {path:'monthly-sales-report', component: MonthlySalesReportComponent},
  {path:'data-entry-management', component: DataEntryManagementComponent},
  {path:'detailed-report', component: DetailedReportComponent},
  {path:'forecast-report', component: ForecastReportComponent}

  // {path:'', redirectTo: '/home', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
