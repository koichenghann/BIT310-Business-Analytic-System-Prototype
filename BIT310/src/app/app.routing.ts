import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MonthlySalesReportComponent } from './monthly-sales/monthly-sales-report/monthly-sales-report.component';
import { ProductCategorySalesReportComponent } from './product-category-sales/product-category-sales-report/product-category-sales-report.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataEntryManagementComponent } from './data-entry-management/data-entry-management/data-entry-management.component';
import { DataEntryFormComponent } from './data-entry-management/data-entry-form/data-entry-form.component'
import { DetailedReportComponent } from './detailed-report/detailed-report/detailed-report.component';
import { ForecastReportComponent } from './forecast-report/forecast-report/forecast-report.component';
import { TestAreaOneComponent } from './test-area/test-area-one/test-area-one.component';
import { PostsComponent } from './test-area/posts/posts.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { SubscriptionComponent } from './auth/subscription/subscription.component';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { VisitorComponent } from './visitor/visitor.component';
import { SalesComponent } from './sales/sales.component';


import { WebPerformDashboardComponent } from './webPerformDashboard/web-perform-dashboard.component';

const APP_ROUTES: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'product-category-sales-report', component: ProductCategorySalesReportComponent},
  {path:'monthly-sales-report', component: MonthlySalesReportComponent},
  {path:'data-entry-management', component: DataEntryManagementComponent},
  {path:'data-entry-management/new-data', component: DataEntryFormComponent},
  {path:'detailed-report', component: DetailedReportComponent},
  {path:'forecast-report', component: ForecastReportComponent},
  {path:'profile', component: ProfileComponent},
  {path:'subscription', component: SubscriptionComponent},
  {path:'test-area-1', component: TestAreaOneComponent},
  {path:'posts', component: PostsComponent},


  {path:'products', component: ProductsComponent},
  {path:'products/product/:productId', component: ProductComponent},
  {path:'sales', component: SalesComponent},
  {path:'visitors', component: VisitorComponent},


  {path:'web-performance/dashboard', component: WebPerformDashboardComponent }

  // {path:'', redirectTo: '/home', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
