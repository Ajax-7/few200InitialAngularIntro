import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './components/models';
import { ListDataService } from './services/list-data.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit {

  bookList$: Observable<Book[]>;
  constructor(
    private service: ListDataService
  ) { }

  ngOnInit() {
    this.bookList$ = this.service.getData();
  }

  addBook(title: string, author: string, format: string) {
    this.service.add (title, author, format);
  }

}
