import { Component, OnInit } from '@angular/core';
import { TodoListItem } from './components/models';
import { ListDataService } from './services/list-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList$: Observable<TodoListItem[]>;
  constructor(
    private service: ListDataService
  ) { }

  ngOnInit() {
    this.todoList$ = this.service.getData();
    // this.service.getData().subscribe(stuff => {
    //   console.log('Got this from the service', stuff);
    //   this.todoList = stuff;
    // });

  }

  addTodoItem(what: string) {
    this.service.add(what);
  }

}
