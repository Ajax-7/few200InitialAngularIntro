import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../models';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() bookAdded = new EventEmitter<string>(); // 2. eventEmitter outputs
  constructor() { }

  ngOnInit() {
  }

  addBook(bookElement: HTMLInputElement, authorElement: HTMLInputElement, formatElement: HTMLInputElement ) {
    // const newBook: Book = {bookElement.value, authorElement.value, formatElement.value};
    // this.bookAdded.emit(newBook); // 1.takes the value and puts it in the eventEmitter
    this.bookAdded.emit(bookElement.value); // 1.takes the value and puts it in the eventEmitter
    console.log(bookElement.value);
    this.bookAdded.emit(authorElement.value); // 1.takes the value and puts it in the eventEmitter
    console.log(authorElement.value);
    this.bookAdded.emit(formatElement.value); // 1.takes the value and puts it in the eventEmitter
    console.log(formatElement.value);
    bookElement.value = '';
    bookElement.focus();
  }

}
