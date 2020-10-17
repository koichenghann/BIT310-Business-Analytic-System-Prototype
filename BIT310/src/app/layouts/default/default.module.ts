import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { TestAreaOneComponent } from 'src/app/test-area/test-area-one/test-area-one.component';
import { PostsComponent } from '../../test-area/posts/posts.component';
import { MatDividerModule } from '@angular/material/divider';
import { AreaComponent } from 'src/app/test-area/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    DefaultComponent,
    TestAreaOneComponent,
    PostsComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    HighchartsChartModule

  ]
})
export class DefaultModule { }
