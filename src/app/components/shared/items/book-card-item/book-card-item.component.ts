import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/BookModels';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book-card-item',
  templateUrl: './book-card-item.component.html',
  styleUrls: ['./book-card-item.component.css']
})
export class BookCardItemComponent implements OnInit {
  @Input() item: Book;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  displayDetails(book: Book){
    var k = book;
    this._router.navigate(['/book-details', book])
  }
}
