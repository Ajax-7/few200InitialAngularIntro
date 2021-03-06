import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { IceCreamComponent } from './components/icecream/icecream.component';
import { NavComponent } from './components/nav/nav.component';
import { BookListModule } from './features/booklist/booklist.module';
import { TodoModule } from './features/todo/todo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    IceCreamComponent,
    NavComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    BookListModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
