import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { IceCreamComponent } from './components/icecream/icecream.component';
import { TodoComponent } from './features/todo/todo.component';
import { CounterComponent } from './components/counter/counter.component';
import { BookListComponent } from './features/booklist/booklist.component';


const routes: Routes = [
  {// acts like a switch statement
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'booklist',
    component: BookListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'icecream',
    component: IceCreamComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '**', // nothing after this will be found
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
