import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: TodoListItem[] = [
    { id: '1', description: 'Clean Gutters', completed: false },
    { id: '2', description: 'Fix snow blower', completed: true }
  ];
  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

}
