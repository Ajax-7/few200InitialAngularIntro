import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>(); // 2. eventEmitter outputs
  constructor() { }

  ngOnInit() {
  }

  addItem(itemEl: HTMLInputElement) {
    this.itemAdded.emit(itemEl.value); // 1.takes the value and puts it in the eventEmitter
    itemEl.value = '';
    itemEl.focus();
  }

}
