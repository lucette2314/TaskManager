import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './components/task/task.component';


@NgModule({
  declarations: [AppComponent, TasksComponent, TaskComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, DatePipe, HttpClientModule,
    RouterModule.forChild([{ path: '', component: AppComponent}])],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [AppModule, TaskComponent],
})
export class AppModule {}
