import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/BookModels';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'book-card-item',
  templateUrl: './book-card-item.component.html',
  styleUrls: ['./book-card-item.component.css']
})
export class BookCardItemComponent implements OnInit {
  @Input() item: Book;
  constructor(private _route: ActivatedRoute, private _router: Router, private backendService: BackendService) { }

  ngOnInit() {
    localStorage.clear();
  }

  addToCart(book: Book){
    this.backendService.addToCart(book);
}

  displayDetails(book: Book){
    var k = book;
    this._router.navigate(['/book-details', book])
  }
}
