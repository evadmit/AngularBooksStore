import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/BookModels';

@Component({
  selector: 'book-management-item',
  templateUrl: './book-management-item.component.html',
  styleUrls: ['./book-management-item.component.css']
})
export class BookManagementItemComponent implements OnInit {
  @Input() bookItem: Book;
  @Output() onDeleteClick = new EventEmitter();
  @Output() onSaveClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  save() {

    this.onSaveClick.emit(this.bookItem);
  }
}
