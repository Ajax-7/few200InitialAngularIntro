import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { IceCreamComponent } from './components/icecream/icecream.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoModule } from './features/todo/todo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    IceCreamComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
