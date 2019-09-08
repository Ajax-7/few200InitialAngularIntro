import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: Book[] = [];
  constructor() { }

  ngOnInit() {
  }

  toggleOnLoan(book: Book) {
    (book.onLoan) ? (book.onLoan = false) : (book.onLoan = true);
  }

  // markOnLoan(book: Book) {
  //   book.onLoan = true;
  // }
  // markReturned(book: Book) {
  //   book.onLoan = false;
  // }
}
