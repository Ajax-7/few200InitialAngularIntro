import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCurrentCount, AppState, selectCountBy } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Component(
  {
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  }
)
export class DashboardComponent implements OnInit {
  current$: Observable<number>;
  message = 'Coming Soon!';
  by$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.by$ = this.store.select(selectCountBy);
    this.current$ = this.store.select(selectCurrentCount);
  }
}
