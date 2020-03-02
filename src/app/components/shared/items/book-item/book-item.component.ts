import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/BookModels';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  price:number;
  @Input() quantity: number;
  constructor() { }

  ngOnInit() {
    this.price = this.book.price*this.quantity;
  }

}
